import { fetchGames } from "./JsonDataService";

export const fetchScreenTimings = async () => {
  try {
    const gamesData = await fetchGames();
    return gamesData
      .filter((game) => game.totalTimeScreen != null)
      .map((game) => ({
        gameName: game.gameName,
        totalTimeScreen: game.totalTimeScreen,
      }));
  } catch (error) {
    console.error("Error in fetchScreenTimings:", error);
    return [];
  }
};

export const fetchPlayCountByGame = async () => {
  try {
    const gamesData = await fetchGames();
    return gamesData
      .filter((game) => game.playCount)
      .map((game) => ({
        gameName: game.gameName,
        timesPlayed: game.playCount,
      }));
  } catch (error) {
    console.error("Error in fetchScreenTimings:", error);
    return [];
  }
};
