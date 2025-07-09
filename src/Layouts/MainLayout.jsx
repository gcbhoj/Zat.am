import { Outlet } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import FooterComponent from "../components/FooterComponent";

const MainLayout = () => {
  return (
    <div className="">
      <MainPage />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
