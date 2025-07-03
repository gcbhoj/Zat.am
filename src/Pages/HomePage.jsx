import SearchBarComponent from "../components/SearchBarComponent";
import AllFavoritePage from "./AllFavoritePage";
import { CgMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import MoreButton from "../UIComponents/MoreButton";
import CategoryDisplayContainer from "../components/CategoryDisplayContainer";
import CategoryPage from "./CategoryPage";

const HomePage = () => {
  return (
    <div className=" flex flex-col">
      <div>
        <SearchBarComponent />
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />
      <div className="flex flex-col mt-5">
        <AllFavoritePage isHome={true} />

        <div className="flex justify-end mr-2 mt-0">
          <Link to="/favorites" target="_blank">
            <MoreButton />
          </Link>
        </div>
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />

      <div className="dark:text-gray-400 text-3xl mt-5">
        <CategoryDisplayContainer isHome={true} />
      </div>
    </div>
  );
};

export default HomePage;
