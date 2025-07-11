import { useContext } from "react";
import InputBox from "../UIComponents/InputBox";
import { GameCategory } from "../Models/GameCategory";
import { GameDifficulty } from "../Models/GameDifficulty";
import Button from "../UIComponents/Button";
import StarRating from "../UIComponents/StarRating";
import { GameContext } from "../Context/GameContext";

const AddNewGame = () => {
  const { newGameInfo, addNewGame, updateNewGame } = useContext(GameContext);

  const handleCategoryChange = (categoryCode) => {
    const exists = newGameInfo.gameCategory.includes(categoryCode);
    const updated = exists
      ? newGameInfo.gameCategory.filter((code) => code !== categoryCode)
      : [...newGameInfo.gameCategory, categoryCode];

    updateNewGame({ gameCategory: updated });
  };

  return (
    <div className="flex flex-col px-6 py-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-serif italic tracking-wider border-b pb-2 mb-6 text-center">
        Enter Game Details
      </h3>

      {/* Game Name */}
      <div className="mb-6">
        <InputBox
          label="Enter Game Name"
          value={newGameInfo.gameName}
          type="text"
          required={true}
          name="gameName"
          onChange={(e) => updateNewGame({ gameName: e.target.value })}
        />
      </div>

      {/* Game Category */}
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="mb-2 font-semibold">Select Game Category</h3>
        {GameCategory.map((category) => (
          <div key={category.code} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={category.code}
              name="gameCategory"
              value={category.code}
              checked={newGameInfo.gameCategory.includes(category.code)}
              onChange={() => handleCategoryChange(category.code)}
            />
            <label htmlFor={category.code}>{category.label}</label>
          </div>
        ))}
      </div>

      {/* Game Image */}
      <div className="mb-6 flex flex-col gap-2">
        <InputBox
          label="Insert Game Image Link"
          type="url"
          value={newGameInfo.gameImage}
          name="gameImage"
          required={true}
          onChange={(e) => updateNewGame({ gameImage: e.target.value })}
        />
      </div>

      {/* Game Link */}
      <div className="mb-6">
        <InputBox
          label="Enter Game Link"
          type="url"
          name="gameLink"
          required={true}
          value={newGameInfo.gameLink}
          onChange={(e) => updateNewGame({ gameLink: e.target.value })}
        />
      </div>

      {/* Difficulty */}
      <div className="mb-6 w-full sm:w-80">
        <label htmlFor="difficulty" className="block mb-1 font-semibold">
          Select Game Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty"
          className="border rounded px-2 py-1 w-full "
          value={newGameInfo.difficulty}
          required={true}
          onChange={(e) => updateNewGame({ difficulty: e.target.value })}
        >
          <option value="">-- Select Difficulty --</option>
          {GameDifficulty.map((difficulty) => (
            <option
              key={difficulty.difficultyLevel}
              value={difficulty.difficultyLevel}
              className="dark:text-gray-950"
            >
              {difficulty.difficultyLevel}
            </option>
          ))}
        </select>
      </div>

      {/* Developer */}
      <div className="mb-6">
        <InputBox
          label="Enter Developing Team Name"
          type="text"
          name="developer"
          value={newGameInfo.developer}
          required={true}
          onChange={(e) => updateNewGame({ developer: e.target.value })}
        />
      </div>

      {/* Rating */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <label className="font-semibold">Rating:</label>
        <StarRating rating={parseFloat(newGameInfo.rating)} />
        <input
          required={true}
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={newGameInfo.rating}
          onChange={(e) =>
            updateNewGame({ rating: parseFloat(e.target.value) })
          }
          className="w-40"
        />
        <span>{newGameInfo.rating}</span>
      </div>

      {/* Version */}
      <div className="mb-6">
        <label className="block mb-1 font-semibold">Game Version</label>
        <input
          required={true}
          type="number"
          step="0.01"
          min={1}
          className="border rounded px-2 py-1 w-full sm:w-64"
          placeholder="e.g., 1.0"
          value={newGameInfo.gameVersion}
          onChange={(e) => updateNewGame({ gameVersion: e.target.value })}
        />
      </div>

      {/* Is Active */}
      <div className="mb-8">
        <label className="block mb-2 font-semibold">Is Active:</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isActive"
              value={true}
              checked={newGameInfo.isActive === true}
              onChange={() => updateNewGame({ isActive: true })}
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isActive"
              value={false}
              checked={newGameInfo.isActive === false}
              onChange={() => updateNewGame({ isActive: false })}
            />
            No
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        label="Submit Game"
        border="border-2 rounded-xl"
        width="w-38"
        height="h-12"
        background="bg-zinc-400"
        fontSize="text-gray-950"
        onClick={addNewGame}
      />
    </div>
  );
};

export default AddNewGame;
