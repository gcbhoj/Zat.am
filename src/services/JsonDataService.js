// gameService.js

export const fetchGames = async () => {
  try {
    const response = await fetch("/data/games.json");
    if (!response.ok) {
      throw new Error("Failed to fetch games.json");
    }
    const data = await response.json();
    return data.games; // assuming the JSON has a `games` array
  } catch (error) {
    console.error("Error in fetchGames:", error);
    return [];
  }
};

export const fetchByCategory = async (category) => {
  try {
    const games = await fetchGames();
    return games.filter(
      (game) =>
        Array.isArray(game.gameCategory) && game.gameCategory.includes(category)
    );
  } catch (error) {
    console.error("Error in fetchByCategory:", error);
    return [];
  }
};

export const fetchByRating = async () => {
  try {
    const games = await fetchGames();
    return games.filter((game) => game.rating >= 4.5);
  } catch (error) {
    console.error("Error in fetchByRating:", error); // 🔁 fixed function name in log
    return [];
  }
};

export const fetchByName = async (gameName) => {
  try {
    const games = await fetchGames();
    return games.filter((game) =>
      game.gameName.toLowerCase().includes(gameName.toLowerCase())
    );
  } catch (error) {
    console.error("Error in fetchByName:", error);
    return [];
  }
};

