// lib/fpl.ts
const BASE = "https://fantasy.premierleague.com/api";

export async function getBootstrap() {
  const res = await fetch(`${BASE}/bootstrap-static/`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });
  return res.json();
}

export async function getPlayerSummary(id: number) {
  const res = await fetch(`${BASE}/element-summary/${id}/`, {
    cache: "force-cache",
    next: { revalidate: 1800 },
  });
  return res.json();
}

// lib/getTeamBadge.ts
export function getTeamBadge(code: number | string) {
  return `https://resources.premierleague.com/premierleague25/badges-alt/${code}.svg`;
}

export const getPlayerImg = (photo: string) =>
  `https://resources.premierleague.com/premierleague25/photos/players/110x140/${photo.replace(
    ".jpg",
    "",
  )}.png`;

export interface Fixture {
  code: number;
  event: number | null;
  finished: boolean;
  finished_provisional: boolean;
  id: number;
  kickoff_time: string | null;
  minutes: number;
  provisional_start_time: boolean;
  started: boolean | null;
  team_a: number;
  team_a_score: number | null;
  team_h: number;
  team_h_score: number | null;
  stats: unknown[];
  team_h_difficulty: number;
  team_a_difficulty: number;
  pulse_id: number;
}

export async function getFixtures(): Promise<Fixture[]> {
  const res = await fetch("https://fantasy.premierleague.com/api/fixtures", {
    next: { revalidate: 60 }, // revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch fixtures: ${res.status}`);
  }

  return res.json();
}

// Team name map (FPL team IDs for 2024/25 season)
export const TEAM_NAMES: Record<number, { name: string; short: string }> = {
  1: { name: "Arsenal", short: "ARS" },
  2: { name: "Aston Villa", short: "AVL" },
  3: { name: "Bournemouth", short: "BOU" },
  4: { name: "Brentford", short: "BRE" },
  5: { name: "Brighton", short: "BHA" },
  6: { name: "Chelsea", short: "CHE" },
  7: { name: "Crystal Palace", short: "CRY" },
  8: { name: "Everton", short: "EVE" },
  9: { name: "Fulham", short: "FUL" },
  10: { name: "Ipswich", short: "IPS" },
  11: { name: "Leicester", short: "LEI" },
  12: { name: "Liverpool", short: "LIV" },
  13: { name: "Man City", short: "MCI" },
  14: { name: "Man Utd", short: "MUN" },
  15: { name: "Newcastle", short: "NEW" },
  16: { name: "Nott'm Forest", short: "NFO" },
  17: { name: "Southampton", short: "SOU" },
  18: { name: "Spurs", short: "TOT" },
  19: { name: "West Ham", short: "WHU" },
  20: { name: "Wolves", short: "WOL" },
};
