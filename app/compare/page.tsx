import { getBootstrap } from "@/lib/fpl";
import { ComparePage } from "@/components/ComparePage";

export default async function CompareRoute() {
  const data = await getBootstrap();
  return <ComparePage players={data.elements} />;
}
