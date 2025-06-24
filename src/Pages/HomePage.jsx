import SearchBarComponent from "../components/SearchBarComponent";
import FavoriteContainer from "../components/FavoriteContainer";
const HomePage = () => {
  
  return (
    <div className=" flex flex-col">
      <div>
        <SearchBarComponent />
      </div>
      <>
        <FavoriteContainer />
      </>
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
