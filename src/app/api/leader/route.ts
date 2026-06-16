import { NextResponse } from "next/server";
import {
  leaderActivities,
  leaderAnnouncements,
  leaderGoals,
  leaderProfile,
  supporters,
} from "@/lib/campaign-data";
import { hasSupabaseConfig, supabase } from "@/lib/supabase-server";

export async function GET() {
  if (!supabase) {
    return NextResponse.json({
      source: "demo",
      leader: leaderProfile,
      supporters,
      goals: leaderGoals,
      activities: leaderActivities,
      announcements: leaderAnnouncements,
    });
  }

  const [leaderResult, supportersResult, goalsResult, activitiesResult, announcementsResult] = await Promise.all([
    supabase.from("leaders").select("*").limit(1).maybeSingle(),
    supabase.from("supporters").select("*").order("created_at", { ascending: false }).limit(25),
    supabase.from("leader_goals").select("*").order("created_at", { ascending: true }),
    supabase.from("leader_activities").select("*").order("created_at", { ascending: false }).limit(20),
    supabase.from("leader_announcements").select("*").order("created_at", { ascending: false }).limit(10),
  ]);

  const failed = [leaderResult, supportersResult, goalsResult, activitiesResult, announcementsResult].find((result) => result.error);

  if (failed?.error) {
    return NextResponse.json(
      {
        source: "supabase-error",
        configured: hasSupabaseConfig,
        message: failed.error.message,
        leader: leaderProfile,
        supporters,
        goals: leaderGoals,
        activities: leaderActivities,
        announcements: leaderAnnouncements,
      },
      { status: 200 },
    );
  }

  return NextResponse.json({
    source: "supabase",
    leader: leaderResult.data ?? leaderProfile,
    supporters: supportersResult.data ?? supporters,
    goals: goalsResult.data ?? leaderGoals,
    activities: activitiesResult.data ?? leaderActivities,
    announcements: announcementsResult.data ?? leaderAnnouncements,
  });
}
