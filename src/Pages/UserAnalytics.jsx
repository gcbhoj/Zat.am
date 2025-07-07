import UserLoginStatus from "../Charts/Users/UserLoginStatus";
import UserFavoriteGames from "../Charts/Users/UserFavoriteGames";
import UsersByQuarters from "../Charts/Users/UsersByQuarters";
const UserAnalytics = () => {
  return (
    <>
      <h3 className="dark:text-gray-300 flex justify-center font-serif text-[20px] italic animate-bounce tracking-[1.75px] mt-0.5 z-20 mb-2">
        User Engagement Insights
      </h3>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-5 mr-5 p-1">
        <UsersByQuarters/>
        <UserLoginStatus />
        <UserFavoriteGames />
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />
    </>
  );
};

export default UserAnalytics;
