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
