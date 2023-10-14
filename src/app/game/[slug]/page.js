import { api } from "@/api";
import { GamePage } from "@/components/GamePage/GamePage";

export default async function Game({ params }) {
  const game = await api.getGame(params.slug);
  const screenshots = await api.getGameScreenShots(params.slug);
  return <GamePage game={game} screenshots={screenshots.results} />;
}
