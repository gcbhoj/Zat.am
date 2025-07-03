import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { fetchScreenTimings } from "../../services/AnalyticsService";

const TotalScreenTimeByGame = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchScreenTimings();

      const formattedData = [
        ["Game Name", "Total Time (min)"],
        ...data.map((game) => [game.gameName, game.totalTimeScreen]),
      ];

      setChartData(formattedData);
    };

    loadChartData();
  }, []);

  const options = {
    title: "Total Screen Time by Game (in minutes)",
    is3D: true,
    legend: {
      position: "bottom",
      textStyle: { fontSize: 12, color: "#CE8147" },
    },
    chartArea: {
      width: "90%",
      height: "70%",
      left: "5%",
      top: "15%",
      bottom: 100,
    },
    backgroundColor: "transparent",
    titleTextStyle: { color: "#CE8147", fontSize: 14 },
  };

  return (
    <div className="w-full sm:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto p-2 border-2 dark:border-gray-400 rounded-lg">
      {chartData.length > 1 ? (
        <div className="w-full h-[300px] sm:h-[400px]">
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={chartData}
            options={options}
          />
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Loading chart...
        </p>
      )}
    </div>
  );
};

export default TotalScreenTimeByGame;
