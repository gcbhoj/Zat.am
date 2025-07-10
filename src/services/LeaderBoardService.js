export const fetchGameData = async () => {
  try {
    const response = await fetch("/data/gamesData.json");

    if (!response.ok) {
      throw new Error("Failed to fetch Game Data");
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    if (!data || !Array.isArray(data.gamesData)) {
      throw new Error("Invalid Data Format");
    }

    return data.gamesData;
  } catch (error) {
    console.error("Error fetching Game Data:", error.message);
    return [];
  }
};

export const leaderBoardAllGames = async () => {
  try {
    const data = await fetchGameData();

    if (!Array.isArray(data)) {
      throw new Error("Invalid Data Format");
    }

    const formattedData = data
      .filter(
        (game) =>
          game.gameName &&
          Array.isArray(game.scoreDetails) &&
          game.scoreDetails.length > 0
      )
      .map((game) => {
        const scoreDetails = game.scoreDetails[0];

        return {
          gameName: game.gameName,
          userId: scoreDetails.userId,
          scoreAchieved: scoreDetails.score,
          dateAchieved: new Date(scoreDetails.timeStamp),
        };
      });

    const arrangedData = formattedData.sort((a, b) => {
      if (b.scoreAchieved === a.scoreAchieved) {
        return new Date(b.dateAcheived) - new Date(a.dateAcheived); // More recent date first
      }
      return b.scoreAchieved - a.scoreAchieved; // Higher score first
    });
    console.log("Arranged Data:", arrangedData);
    return arrangedData;
  } catch (error) {
    console.error("Error fetching Data:", error.message);
    return [];
  }
};

export const leaderBoardByGame = async () => {
  try {
    const data = await fetchGameData();

    if (!Array.isArray(data)) {
      throw new Error("Invalid Data Format");
    }
    const formattedData = data
      .filter(
        (game) =>
          game.gameName &&
          Array.isArray(game.scoreDetails) &&
          game.scoreDetails.length > 0
      )
      .map((game) => ({
        gameName: game.gameName,
        scoreBoard: game.scoreDetails
          .sort((a, b) => b.score - a.score)
          .slice(0, 10),
      }));

    return formattedData;
  } catch (error) {
    console.error("Error fetching Data:", error.message);
    return [];
  }
};
