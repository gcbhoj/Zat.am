import { useEffect, useState } from "react";
import { fetchHighScores } from "../../services/AnalyticsService";
import { Chart } from "react-google-charts";

const GamesAndHighScores = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchHighScores();

      const formattedData = [
        ["Game Name", "High Score", "Acheived Date"],
        ...data.map((game) => [
          game.gameName,
          game.highScore,
          game.achievedDate,
        ]),
      ];
      setChartData(formattedData);
    };
    loadChartData();
  }, []);

  const options = {
    chart: {
      title: "Game's vs High Score vs Acheived Date",
      backgroundColor: { fill: "transparent" },
    },
    chartArea: { width: "100%", height: "65%", left: "10%", top: "15%" },
    colors: ["#e2431e", "#f1ca3a"],
    curveType: "function", // Smooths the lines
    lineWidth: 4,
    pointSize: 7,
    legend: { position: "bottom" },
  };
  return (
    <div className="border-2 w-full overflow-x-auto p-2 dark:border-gray-400 m-5 dark:text-gray-400 mb-5 rounded-lg">
      <div className="min-w-[1000px] overflow-x-auto">
        {chartData.length > 1 ? (
          <Chart
            chartType="Line"
            width="100%"
            height="350px"
            data={chartData}
            options={options}
          />
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            Loading chart...
          </p>
        )}
      </div>
    </div>
  );
};

export default GamesAndHighScores;
