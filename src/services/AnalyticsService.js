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
    console.error("Error fetching Times Played:", error);
    return [];
  }
};

export const fetchStarsCount = async () => {
  try {
    const gamesData = await fetchGames();
    return gamesData
      .filter((game) => game.gameName && game.rating && game.totalreviews)
      .map((game) => ({
        gameName: game.gameName,
        averageRating: game.rating,
        totalreviews: game.totalreviews,
        totalStars: parseFloat((game.rating * game.totalreviews).toFixed(2)),
      }));
  } catch (error) {
    console.error("Error Fetching Stars Count:", error);
    return [];
  }
};

export const fetchLastPlayed = async () => {
  try {
    const gamesData = await fetchGames();

    return gamesData
      .filter((game) => game.gameName && game.lastPlayed)
      .map((game) => ({
        gameName: game.gameName,
        lastPlayed: new Date(game.lastPlayed), // Convert to Date for easy formatting or calculations
      }));
  } catch (error) {
    console.error("Error Fetching Last Played Data:", error);
    return [];
  }
};

export const fetchHighScores = async () => {
  try {
    const gamesData = await fetchGames();
    return gamesData
      .filter(
        (game) =>
          Array.isArray(game.highScoreDetails) &&
          game.highScoreDetails.length > 0 &&
          game.gameName
      )
      .map((game) => {
        const latestScore =
          game.highScoreDetails[game.highScoreDetails.length - 1];
        return {
          gameName: game.gameName,
          highScore: latestScore.highScore,
          achievedDate: new Date(latestScore.timeStamp),
        };
      });
  } catch (error) {
    console.error("Error Fetching Games Data:", error);
    return [];
  }
};

