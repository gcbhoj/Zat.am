import { CgProfile } from "react-icons/cg";
import Button from "../UIComponents/Button";
import { getFormattedDateTime } from "../services/DateTimeService";

const ProfileComponent = () => {
  const { weekday, time } = getFormattedDateTime();

  return (
    <div className="border border-blue-400 w-24 h-36 sm:w-24 sm:h-36 md:w-36 md:h-36 flex flex-col">
      <Button
        margin="m-0.5"
        icon={
          <CgProfile className="text-6xl sm:text-6xl md:text-7xl dark:text-stone-600 text-zinc-400" />
        }
      />
      <hr className="h-1 rounded-md mx-0.5 dark:bg-amber-800 bg-gradient-to-r from-sky-500 from-10% via-lime-500 via-30% to-violet-600 to-90% ... rotate-x-180" />
      <div className="border border-amber-600 m-0.5 flex flex-col items-center justify-center h-20 space-y-1">
        <p className="dark:text-stone-600 text-xs sm:text-sm md:text-[14px] font-serif">
          {weekday}
        </p>
        <p className="dark:text-stone-600 text-xs sm:text-sm md:text-[14px] font-serif">
          {time}
        </p>
      </div>
    </div>
  );
};

export default ProfileComponent;
