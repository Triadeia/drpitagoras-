import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { getMovementDocument } from "@/lib/movement-documents";

const documentsDirectory = path.join(process.cwd(), "doutrinas");

export async function readMovementDocumentMarkdown(id: string) {
  const document = getMovementDocument(id);
  if (!document) return null;

  const filePath = path.join(documentsDirectory, document.fileName);
  const markdown = await readFile(filePath, "utf8");

  return { document, markdown };
}
