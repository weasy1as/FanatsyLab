import { clsx, type ClassValue } from "clsx";
import { cache } from "react";
import { twMerge } from "tailwind-merge";
import { getBootstrap } from "./fpl";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const positions: Record<number, string> = {
  1: "Goalkeeper",
  2: "Defender",
  3: "Midfielder",
  4: "Forward",
};

export const getTopScorers = cache(async (limit: number = 5) => {
  const data = await getBootstrap();

  return [...data.elements]
    .sort((a, b) => b.goals_scored - a.goals_scored)
    .slice(0, limit);
});

export const getTopAssisters = cache(async (limit: number = 5) => {
  const data = await getBootstrap();

  return [...data.elements]
    .sort((a, b) => b.assists - a.assists)
    .slice(0, limit);
});
