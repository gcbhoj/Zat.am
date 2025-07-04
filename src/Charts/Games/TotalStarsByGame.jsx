import { useEffect, useState } from "react";
import { fetchStarsCount } from "../../services/AnalyticsService";
import { Chart } from "react-google-charts";

const TotalStarsByGame = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchStarsCount();

      const formattedData = [
        ["Game Name", "Total Stars"],
        ...data.map((game) => [game.gameName, game.totalStars]),
      ];

      setChartData(formattedData);
    };

    loadChartData();
  }, []);

  const options = {
    title: "Game Ratings Overview",
    hAxis: {
      title: "Games Name",
      slantedText: true,
      slantedTextAngle: 90,
      titleTextStyle: { color: "#CE8147", fontSize: 12 },
      textStyle: {
        color: "#CE8147",
        fontSize: 12,
        fontName: "serif",
      },
    },
    vAxis: {
      title: "Total Stars",
      titleTextStyle: { color: "#CE8147", fontSize: 12 },
      textStyle: {
        color: "#CE8147",
        fontSize: 13,
        fontName: "serif",
      },
    },
    legend: "none",
    chartArea: { width: "85%", height: "65%", left: "10%", top: "15%" },
    backgroundColor: "transparent",
    titleTextStyle: { color: "#CE8147", fontSize: 14 },
  };

  return (
    <div className="border-2 w-full overflow-x-auto p-2 dark:border-gray-400 m-5 dark:text-gray-400 mb-5 rounded-lg">
      <div className="min-w-[750px] md:min-w-full">
        {chartData.length > 1 ? (
          <Chart
            chartType="ColumnChart"
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

export default TotalStarsByGame;
