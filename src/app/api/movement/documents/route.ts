import { NextResponse } from "next/server";
import { google } from "googleapis";
import { movementDocuments } from "@/lib/movement-documents";

export const runtime = "nodejs";

function getDriveConfig() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID ?? "1ph_5MQ4QVuNh8tp427eszx_d613RI4LU";

  if (!clientEmail || !privateKey) return null;
  return { clientEmail, privateKey, folderId };
}

export async function GET() {
  return NextResponse.json({
    source: "static-seed",
    documents: movementDocuments,
    driveConfigured: Boolean(getDriveConfig()),
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const title = String(formData.get("title") ?? "").trim();
  const type = String(formData.get("type") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const territory = String(formData.get("territory") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  const source = String(formData.get("source") ?? "").trim();
  const tags = String(formData.get("tags") ?? "").split(",").map((tag) => tag.trim()).filter(Boolean);

  if (!title || !type || !(file instanceof File)) {
    return NextResponse.json({ error: "Campos obrigatorios: titulo, tipo e arquivo." }, { status: 400 });
  }

  const config = getDriveConfig();
  const baseDocument = {
    id: `upload-${Date.now()}`,
    code: "UPLOAD",
    title,
    type,
    category: category || "Documentos do Movimento",
    territory: territory || "Bahia",
    date: new Date().toISOString().slice(0, 10),
    source: source || "Upload do painel",
    status: "Em revisao",
    summary: summary || "Documento enviado pela area Movimento.",
    tags,
    fileName: file.name,
  };

  if (!config) {
    return NextResponse.json({
      source: "local-fallback",
      driveConfigured: false,
      message: "Google Drive ainda nao configurado no servidor. Salve localmente e configure as variaveis na Vercel.",
      document: baseDocument,
    }, { status: 202 });
  }

  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });
  const drive = google.drive({ version: "v3", auth });
  const buffer = Buffer.from(await file.arrayBuffer());

  const uploaded = await drive.files.create({
    requestBody: {
      name: file.name,
      parents: [config.folderId],
    },
    media: {
      mimeType: file.type || "application/octet-stream",
      body: Buffer.from(buffer),
    },
    fields: "id, name, webViewLink",
  });

  return NextResponse.json({
    source: "google-drive",
    driveConfigured: true,
    document: {
      ...baseDocument,
      driveUrl: uploaded.data.webViewLink,
      driveFileId: uploaded.data.id,
    },
  });
}
