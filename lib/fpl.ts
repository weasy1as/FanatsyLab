// lib/fpl.ts
const BASE = "https://fantasy.premierleague.com/api";

export async function getBootstrap() {
  const res = await fetch(`${BASE}/bootstrap-static/`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export async function getPlayerSummary(id: number) {
  const res = await fetch(`${BASE}/element-summary/${id}/`, {
    next: { revalidate: 1800 },
  });
  return res.json();
}

// lib/getTeamBadge.ts
export function getTeamBadge(code: number | string) {
  return `https://resources.premierleague.com/premierleague25/badges-alt/${code}.svg`;
}
