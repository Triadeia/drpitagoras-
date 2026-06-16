import { NextRequest, NextResponse } from "next/server";
import { supporters } from "@/lib/campaign-data";
import { supabase } from "@/lib/supabase-server";

export async function GET() {
  if (!supabase) {
    return NextResponse.json({ source: "demo", supporters });
  }

  const { data, error } = await supabase
    .from("supporters")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ source: "supabase-error", message: error.message, supporters }, { status: 200 });
  }

  return NextResponse.json({ source: "supabase", supporters: data });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const supporter = {
    name: String(body?.name ?? "Novo apoiador").trim(),
    phone: String(body?.phone ?? "").trim(),
    neighborhood: String(body?.neighborhood ?? "Bairro nao informado").trim(),
    city: String(body?.city ?? "Candeias").trim(),
    status: String(body?.status ?? "Novo cadastro").trim(),
    points: Number(body?.points ?? 10),
    tags: Array.isArray(body?.tags) ? body.tags : ["Cadastro"],
  };

  if (!supabase) {
    return NextResponse.json({ source: "demo", supporter: { id: crypto.randomUUID(), ...supporter } }, { status: 201 });
  }

  const { data, error } = await supabase.from("supporters").insert(supporter).select("*").single();

  if (error) {
    return NextResponse.json({ source: "supabase-error", message: error.message, supporter }, { status: 200 });
  }

  return NextResponse.json({ source: "supabase", supporter: data }, { status: 201 });
}
