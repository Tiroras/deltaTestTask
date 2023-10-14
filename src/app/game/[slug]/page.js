import { api } from "@/api";
import Loading from "@/app/loading";
import { GamePage } from "@/components/GamePage";
import { Suspense } from "react";

export default async function Game({ params }) {
  const game = await api.getGame(params.slug);
  const screenshots = await api.getGameScreenShots(params.slug);
  return (
    <Suspense fallback={<Loading />}>
      <GamePage game={game} screenshots={screenshots.results} />
    </Suspense>
  );
}
