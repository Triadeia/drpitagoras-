import { NextRequest, NextResponse } from "next/server";
import { leaderProfile } from "@/lib/campaign-data";
import { supabase } from "@/lib/supabase-server";

function clean(value: unknown, fallback: string) {
  const text = String(value ?? "").trim();
  return text.length > 0 ? text : fallback;
}

export async function GET() {
  if (!supabase) {
    return NextResponse.json({ source: "demo", leaders: [leaderProfile] });
  }

  const { data, error } = await supabase
    .from("leaders")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ source: "supabase-error", message: error.message, leaders: [leaderProfile] }, { status: 200 });
  }

  return NextResponse.json({ source: "supabase", leaders: data });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const phone = clean(body?.phone, "");
  const emailFallback = phone
    ? `lider-${phone.replace(/\D/g, "")}@drpitagoras.local`
    : `lider-${Date.now()}@drpitagoras.local`;

  const leader = {
    name: clean(body?.name, "Nova lideranca"),
    role: clean(body?.role, "Lider da Campanha"),
    email: clean(body?.email, emailFallback),
    phone,
    city: clean(body?.city, "Candeias"),
    neighborhood: clean(body?.neighborhood, "Bairro nao informado"),
    invite_url: clean(body?.invite_url, "https://dr-pitagoras.vercel.app/#entrar"),
    points: Number(body?.points ?? 25),
    level: clean(body?.level, "Mobilizador Bronze"),
  };

  if (!supabase) {
    return NextResponse.json({ source: "demo", leader: { id: crypto.randomUUID(), ...leader } }, { status: 201 });
  }

  const { data, error } = await supabase.from("leaders").insert(leader).select("*").single();

  if (error) {
    return NextResponse.json({ source: "supabase-error", message: error.message, leader }, { status: 200 });
  }

  return NextResponse.json({ source: "supabase", leader: data }, { status: 201 });
}
