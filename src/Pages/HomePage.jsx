import SearchBarComponent from "../components/SearchBarComponent";
import AllFavoritePage from "./AllFavoritePage";
import { CgMore } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import MoreButton from "../UIComponents/MoreButton";

const HomePage = () => {
  return (
    <div className=" flex flex-col">
      <div>
        <SearchBarComponent />
      </div>
      <div className="flex flex-col mt-5">
        <AllFavoritePage isHome={true} />

        <div className="flex justify-end mr-2 mt-0">
          <NavLink to="/favorites" target="_blank ">
        <MoreButton/>
          </NavLink>

        </div>
      </div>
      <div className="dark:text-gray-400 text-3xl border-amber-600 border m-5">
        I Will have many faces depending upon the categories i will be
        displaying a minimum of 2 games and a maximum of 4 games depending upon
        the size of the window.
        <br />I will also be taking you to a page where all games related to the
        specific category will be displayed.
      </div>
    </div>
  );
};

export default HomePage;
