import { getFormattedDateTime } from "../services/DateTimeService";

const DateTimeComponent = () => {
  const { weekday, time } = getFormattedDateTime();

  return (
    <div className="md:h-[50px] md:flex md:flex-col items-center justify-center space-y-0.5 rounded-2xl bg-gray-200 m-1 shadow-2xl shadow-gray-200">
      <p className="dark:text-stone-600 text-xs sm:text-sm md:text-[12px] font-serif flex justify-center">
        {weekday}
      </p>
      <p className="dark:text-stone-600 text-xs sm:text-xs md:text-[12px] font-serif flex justify-center">
        {time}
      </p>
    </div>
  );
};

export default DateTimeComponent;
