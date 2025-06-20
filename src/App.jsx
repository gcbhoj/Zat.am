import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import GamesPage from "./Pages/GamesPage";
import LeaderBoardPage from "./Pages/LeaderBoardPage";
import DashboardPage from "./Pages/DashboardPage";
import AboutUs  from "./Pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/leaderboard" element={<LeaderBoardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
