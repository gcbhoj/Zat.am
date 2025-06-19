import { getFormattedDateTime } from "../services/DateTimeService";

const DateTimeComponent = () => {
    const { weekday, time } = getFormattedDateTime();

  return (
    <div className="m-0.5 flex flex-col items-center justify-center h-20 space-y-0.5 rounded-2xl bg-gray-200 shadow-2xl shadow-gray-200 ">
      <p className="dark:text-stone-600 text-xs sm:text-sm md:text-[14px] font-serif">
        {weekday}
      </p>
      <p className="dark:text-stone-600 text-xs sm:text-sm md:text-[14px] font-serif">
        {time}
      </p>
    </div>
  );
};

export default DateTimeComponent;
