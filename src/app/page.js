import { MainPage } from "@/components/MainPage/MainPage";
import { api } from "@/api";

export default async function Home({ searchParams }) {
  const games = await api.getGames();
  const platforms = await api.getPlatforms();

  return <MainPage data={games.results} platforms={platforms.results} />;
}
