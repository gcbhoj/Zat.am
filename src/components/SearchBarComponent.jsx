import Button from "../UIComponents/Button";
import InputBox from "../UIComponents/InputBox"
import { BsSearchHeart } from "react-icons/bs";


const SearchBarComponent = () => {
  return (
    <div className="mt-1 m-0.5 mb-0.5 flex flex-col rounded-lg">
      <div className="h-[105px] rounded-lg flex flex-wrap items-center justify-center gap-2 p-4 z-10">
        <InputBox
          type="text"
          name="searchGames"
          placeholder="Search your favourrite games here"
          label="search your favouriate games"
          width="w-[175px] sm:w-96 md:w-105"
        />
        <Button
          label="Browse"
          margin="ml-5"
          border="border-2 "
          width="w-32"
          height="h-12"
          darkText="dark:text-amber-400"
          fontSize="text-[13px]"
          icon={<BsSearchHeart className="w-12 h-9 dark:text-amber-400"/>}
        />
      </div>
    </div>
  );
};

export default SearchBarComponent;
