"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Player } from "@/types/player";
import { positions } from "@/lib/utils";
import PlayerImage from "./PlayerImage";
import { getPlayerImg } from "@/lib/fpl";

type Props = {
  player: Player;
};

export function PlayerCard({ player }: Props) {
  const position = positions[player.element_type];
  const price = (player.now_cost / 10).toFixed(1);

  const statusColor =
    player.status === "a"
      ? "bg-emerald-400"
      : player.status === "d"
        ? "bg-yellow-400"
        : "bg-red-500";

  return (
    <Card
      className="w-full max-w-md mx-auto 
      bg-neutral-900/60 backdrop-blur-xl 
      border border-neutral-800 
      rounded-3xl 
      shadow-2xl 
      hover:ring-1 hover:ring-indigo-500 
      transition-all duration-300"
    >
      {/* HEADER */}
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-2xl font-bold text-neutral-100">
            {player.web_name}
          </CardTitle>
          <p className="text-sm text-neutral-400">
            {player.first_name} {player.second_name}
          </p>
        </div>

        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
          {position}
        </Badge>
      </CardHeader>

      {/* IMAGE WITH GRADIENT BACK */}
      <div className="relative flex justify-center py-4">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-xl mx-6" />
        <div className="relative z-10">
          <PlayerImage src={getPlayerImg(player.photo)} alt={player.web_name} />
        </div>
      </div>

      <CardContent className="space-y-6">
        <Separator className="bg-neutral-800" />

        {/* KEY STATS */}
        <div className="grid grid-cols-2 gap-5 text-sm">
          <Stat label="Price" value={`£${price}m`} highlight />
          <Stat label="Total Points" value={player.total_points} highlight />
          <Stat label="PPG" value={player.points_per_game} />
          <Stat label="Form" value={player.form} />
          <Stat label="Minutes" value={player.minutes} />
          <Stat label="Selected %" value={`${player.selected_by_percent}%`} />
        </div>

        <Separator className="bg-neutral-800" />

        {/* ATTACK / DEFENSE */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          {(player.element_type === 1 || player.element_type === 2) && (
            <Stat label="Clean Sheets" value={player.clean_sheets} />
          )}
          <Stat label="Goals" value={player.goals_scored} />
          <Stat label="Assists" value={player.assists} />
          <Stat label="Bonus" value={player.bonus} />
        </div>

        <Separator className="bg-neutral-800" />

        {/* FOOTER */}
        <div className="flex justify-between items-center text-sm text-neutral-400">
          <span>
            BPS: <span className="text-neutral-200">{player.bps}</span>
          </span>

          <div className="flex items-center gap-2">
            <span>Status</span>
            <span className={`w-3 h-3 rounded-full ${statusColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
function Stat({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string | number;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-neutral-500 text-xs">{label}</span>
      <span
        className={`font-semibold ${
          highlight
            ? "bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            : "text-neutral-100"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
