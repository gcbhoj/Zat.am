import React, { useState } from "react";
import AddGameForm from "../AdminPanel/AddNewGame";


const GamesPanelPage = () => {
  const [activePanel, setActivePanel] = useState(null);

  const renderPanel = () => {
    switch (activePanel) {
      case "add":
        return <AddGameForm />;
      case "search":
        return ;
      case "edit":
        return ;
      default:
        return <div>Select an action</div>;
    }
  };

  const actionLabelMap = {
    add: "Add Game",
    search: "Search Game",
    edit: "Edit Game",
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg">
      <div className="sm:w-1/3 border-r-2 pr-4">
        <h3 className="text-xl font-serif italic mb-3 underline underline-offset-4">
          Actions
        </h3>

        {activePanel ? (
          <>
            <div className="text-[18px] tracking-[1.25px] font-serif border-2 flex justify-center h-12 items-center rounded-xl mb-4">
              {actionLabelMap[activePanel]}
            </div>
            <button
              onClick={() => setActivePanel(null)}
              className="w-full bg-red-400 text-white font-bold py-2 px-4 rounded-xl hover:bg-red-500 transition"
            >
              Back
            </button>
          </>
        ) : (
          <ul>
            <li
              onClick={() => setActivePanel("add")}
              className="cursor-pointer text-[18px] tracking-[1.25px] font-serif border-2 flex justify-center h-12 items-center rounded-xl mt-5 mb-10"
            >
              Add Game
            </li>
            <li
              onClick={() => setActivePanel("search")}
              className="cursor-pointer text-[18px] tracking-[1.25px] font-serif border-2 flex justify-center h-12 items-center rounded-xl mb-10"
            >
              Search Game
            </li>
            <li
              onClick={() => setActivePanel("edit")}
              className="cursor-pointer text-[18px] tracking-[1.25px] font-serif border-2 flex justify-center h-12 items-center rounded-xl mb-10"
            >
              Edit Game
            </li>
          </ul>
        )}
      </div>

      <div className="flex-1 bg-zinc-100 rounded-xl shadow-2xl dark:bg-transparent px-4 py-5">
        {renderPanel()}
      </div>
    </div>
  );
};

export default GamesPanelPage;
