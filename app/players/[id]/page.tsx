import { PlayerCard } from "@/components/PlayerCard";
import { getBootstrap, getPlayerSummary } from "@/lib/fpl";
import React from "react";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await getBootstrap();
  const { id } = await params;

  const player = data.elements.find((p: any) => p.bps === Number(id));
  console.log(player);

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div className="h-screen p-8 bg-gradient-to-b from-slate-900 via-neutral-900 to-black">
      <PlayerCard player={player} />
    </div>
  );
}
