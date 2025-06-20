import { Outlet } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import FooterComponent from "../components/FooterComponent";

const MainLayout = () => {
  return (
    <>
      <MainPage />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
