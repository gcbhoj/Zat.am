import { FaEdit } from "react-icons/fa";
import Button from "../UIComponents/Button";
import { Link } from "react-router-dom";
const AdminViewGame = () => {
  return (
    <>
      <h3 className="flex justify-center tracking-[1.25px] border-b mb-5">
        Click on Edit icon to Edit Game Information..
      </h3>

      <div className="border-2 p-4 rounded-xl">
        {/* Game ID & Name */}
        <div className="tracking-[1.25px] mb-4">
          <h3 className="flex justify-center mt-2 mb-1">
            Game ID: G_20250708_142302_244_387
          </h3>
          <h3 className="flex justify-center">Game Name: Crossword</h3>
        </div>

        <hr className="mb-4" />

        {/* Side-by-side Details */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Game Details */}
          <div className="border-2 border-amber-400 p-4 flex-1 rounded-lg space-y-2 text-[15px] tracking-[1.25px] bg-zinc-100 text-gray-950  shadow-xl dark:shadow-gray-100">
            <h3 className="font-semibold mb-2 underline">Game Info</h3>
            <p>Game Category: TA</p>
            <p>Game Link:http s://gcbhoj.github.io/SBGame001/</p>
            <p>Game Image: /data/images/crossword.png</p>
            <p>Developer: SB Team</p>
            <p>Difficulty: Hard</p>
            <p>Game Version: 1.1</p>
            <p>Rating: 1.1</p>
            <p>isActive: true</p>
            <div className="justify-end flex mr-2">
              <Link to="/edit">
                <Button
                  icon={<FaEdit className="text-zinc-400 hover:text-sky-400" />}
                />
              </Link>
            </div>
          </div>

          {/* Meta Data */}
          <div className="border-2 border-amber-400 p-4 flex-1 rounded-lg space-y-2 text-[15px] tracking-[1.25px] bg-zinc-100 text-gray-950  shadow-xl dark:shadow-gray-100">
            <h3 className="font-semibold mb-2 underline">Game Meta Data</h3>
            <p>High Score: 5000</p>
            <p>Date Achieved: 2025/07/11</p>
            <p>Average Score: 2666.66</p>
            <p>Total Screen Time: 8000</p>
            <p>Times Played: 1</p>
            <p>Last Played: 2025/07/11</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewGame;
