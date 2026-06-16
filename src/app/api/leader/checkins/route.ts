import { NextRequest, NextResponse } from "next/server";
import { leaderActivities } from "@/lib/campaign-data";
import { supabase } from "@/lib/supabase-server";

export async function GET() {
  if (!supabase) {
    return NextResponse.json({ source: "demo", checkins: leaderActivities });
  }

  const { data, error } = await supabase
    .from("leader_checkins")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(30);

  if (error) {
    return NextResponse.json({ source: "supabase-error", message: error.message, checkins: leaderActivities }, { status: 200 });
  }

  return NextResponse.json({ source: "supabase", checkins: data });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const checkin = {
    type: String(body?.type ?? "Visita").trim(),
    location: String(body?.location ?? "Local nao informado").trim(),
    description: String(body?.description ?? "Check-in registrado pelo painel").trim(),
    points: Number(body?.points ?? 15),
  };

  if (!supabase) {
    return NextResponse.json({ source: "demo", checkin: { id: crypto.randomUUID(), ...checkin } }, { status: 201 });
  }

  const { data, error } = await supabase.from("leader_checkins").insert(checkin).select("*").single();

  if (error) {
    return NextResponse.json({ source: "supabase-error", message: error.message, checkin }, { status: 200 });
  }

  return NextResponse.json({ source: "supabase", checkin: data }, { status: 201 });
}
