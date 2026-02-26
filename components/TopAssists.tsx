import React from "react";
import PlayerDisplay from "./PlayerDisplay";
import { getTopAssisters } from "@/lib/utils";

export default async function TopAssists() {
  const players = await getTopAssisters(4);

  return (
    <section className="py-20 w-full">
      <h2 className="text-3xl font-semibold mb-8 text-neutral-100">
        Top Assisters
      </h2>

      <div className="">
        <PlayerDisplay players={players} assist={true} />
      </div>
    </section>
  );
}
