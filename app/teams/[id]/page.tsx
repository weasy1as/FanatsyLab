import Image from "next/image";
import { getBootstrap } from "@/lib/fpl";
import PlayerImage from "@/components/PlayerImage";

// Position mapping
const positions: Record<number, string> = {
  1: "Goalkeeper",
  2: "Defender",
  3: "Midfielder",
  4: "Forward",
};

const getBadge = (code: number) =>
  `https://resources.premierleague.com/premierleague25/badges-alt/${code}.svg`;

const getPlayerImg = (photo: string) =>
  `https://resources.premierleague.com/premierleague25/photos/players/110x140/${photo.replace(
    ".jpg",
    "",
  )}.png`;

export default async function TeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await getBootstrap();
  const { id } = await params; // ⭐ unwrap params
  const code = Number(id);
  console.log(data);
  // Find team
  const team = data.teams.find((t: any) => t.code === code);
  console.log(team);

  // Get players from data.elements
  const players = data.elements.filter((p: any) => p.team_code === 3);
  console.log(players[0]);

  //if (!team) return <div>Team not found</div>;

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10">
      {/* Team header */}
      <div className="flex items-center gap-6 mb-10">
        <Image src={getBadge(code)} alt="" width={70} height={70} />
        <h1 className="text-4xl font-bold">{team.name}</h1>
      </div>

      {/* Players grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {players.map((p: any) => (
          <div
            key={p.id}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-purple-500 transition"
          >
            <PlayerImage src={getPlayerImg(p.photo)} alt={p.web_name} />
            <h3 className="mt-3 font-semibold">{p.web_name}</h3>
            <p className="text-sm text-purple-400 font-medium">
              {positions[p.element_type]} {/* Show position */}
            </p>

            <p className="text-sm text-neutral-400">£{p.now_cost / 10}m</p>

            <p className="text-sm text-neutral-400">Points: {p.total_points}</p>

            <p className="text-sm text-neutral-400">Form: {p.form}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
