import SearchBarComponent from "../components/SearchBarComponent";
import AllFavoritePage from "./AllFavoritePage";
import { CgMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import MoreButton from "../UIComponents/MoreButton";
import CategoryDisplayContainer from "../components/CategoryDisplayContainer";
import { GameCategory } from "../Models/GameCategory";

const HomePage = () => {
  return (
    <div className=" flex flex-col">
      <div>
        <SearchBarComponent />
      </div>
      <div className="flex flex-col mt-5">
        <AllFavoritePage isHome={true} />

        <div className="flex justify-end mr-2 mt-0">
          <Link to="/favorites" target="_blank ">
            <MoreButton />
          </Link>
        </div>
      </div>
      <div className="dark:text-gray-400 text-3xl border-amber-600 border m-5">
        <CategoryDisplayContainer />
      </div>
    </div>
  );
};

export default HomePage;
