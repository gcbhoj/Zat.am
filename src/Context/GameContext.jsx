import { createContext, useCallback, useState } from "react";
import { GameCategory } from "../Models/GameCategory";
import { ToastContainer, toast } from "react-toastify";

// Create the context
export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [newGame, setNewGame] = useState(null);
  const [newGameSubmissionError, setNewGameSubmissionError] = useState(null);
  const [isNewGameSubmitting, setIsNewGameSubmitting] = useState(false);
  const [newGameInfo, setNewGameInfo] = useState({
    gameName: "",
    gameCategory: [],
    gameImage: "",
    gameLink: "",
    developer: "",
    difficulty: "",
    rating: "",
    gameVersion: "",
    isActive: "",
  });

  const updateNewGame = useCallback((updatedFields) => {
    setNewGameInfo((prev) => ({ ...prev, ...updatedFields }));
  }, []);

  // Add new game function
  const addNewGame = useCallback(
    async (e) => {
      if (e) e.preventDefault();

      setIsNewGameSubmitting(true);
      setNewGameSubmissionError(null);

      try {
        const response = await fetch("http://localhost:5000/api/games/addNew", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newGameInfo),
        });

        const data = await response.json();

        toast(data.message);

        if (!response.ok)
          throw new Error(data.message || "Something went wrong");

        setNewGame(data); // Update the submitted game
        setNewGameInfo({
          gameName: "",
          gameCategory: [],
          gameImage: "",
          gameLink: "",
          developer: "",
          difficulty: "",
          rating: "",
          gameVersion: "",
          isActive: "",
        });
      } catch (err) {
        setNewGameSubmissionError(err.message);
      } finally {
        setIsNewGameSubmitting(false);
      }
    },
    [newGameInfo]
  );

  return (
    <GameContext.Provider
      value={{
        newGame,
        newGameInfo,
        setNewGameInfo,
        isNewGameSubmitting,
        newGameSubmissionError,
        addNewGame,
        updateNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
