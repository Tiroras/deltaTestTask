import { MainPage } from "@/components/MainPage/MainPage";
import { api } from "@/api";

export default async function Home() {
  const platforms = await api.getPlatforms();
  return <MainPage platforms={platforms.results} />;
}
