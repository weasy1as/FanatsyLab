"use client";
import React from "react";
import PlayerImage from "./PlayerImage";
import { redirect } from "next/navigation";
type PlayerDisplayProps = {
  players: any[];
};

const PlayerDisplay = ({ players }: PlayerDisplayProps) => {
  // Position mapping
  const positions: Record<number, string> = {
    1: "Goalkeeper",
    2: "Defender",
    3: "Midfielder",
    4: "Forward",
  };

  const getPlayerImg = (photo: string) =>
    `https://resources.premierleague.com/premierleague25/photos/players/110x140/${photo.replace(
      ".jpg",
      "",
    )}.png`;
  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {players.map((p: any) => (
          <div
            key={p.id}
            onClick={() => redirect(`/players/${p.bps}`)}
            className="flex justify-between items-center px-9 bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-purple-500 transition"
          >
            <div className="flex flex-col items-center">
              <PlayerImage src={getPlayerImg(p.photo)} alt={p.web_name} />
              <h3 className="mt-3 font-semibold">{p.web_name}</h3>
            </div>
            <div>
              {" "}
              <p className="text-sm text-purple-400 font-medium">
                {positions[p.element_type]} {/* Show position */}
              </p>
              <p className="text-sm ">£{p.now_cost / 10}m</p>
              <p className="text-sm ">Points: {p.total_points}</p>
              <p className="text-sm ">Form: {p.form}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerDisplay;
