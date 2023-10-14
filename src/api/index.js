const url = "https://api.rawg.io/api/";

export const api = {
  async getGames(pageSize, search, ordering, platforms) {
    console.log(platforms);
    const data = await fetch(
      `${url}games?key=${process.env.API_KEY}&page_size=${pageSize}${
        search && `&search=${search}`
      }${ordering && `&ordering=${ordering}`}${
        platforms && `&platforms=${platforms}`
      }`,
      { next: { revalidate: 3600 } },
    );
    return data.json();
  },
  async getGame(slug) {
    const data = await fetch(`${url}games/${slug}?key=${process.env.API_KEY}`, {
      next: { revalidate: 3600 },
    });
    return data.json();
  },
  async getPlatforms() {
    const data = await fetch(`${url}platforms?key=${process.env.API_KEY}`, {
      next: { revalidate: 3600 },
    });
    return data.json();
  },
  async getGameScreenShots(slug) {
    const data = await fetch(
      `${url}games/${slug}/screenshots?key=${process.env.API_KEY}`,
      { next: { revalidate: 36000 } },
    );
    return data.json();
  },
};
