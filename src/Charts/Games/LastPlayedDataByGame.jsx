import { useEffect, useState } from "react";
import { fetchLastPlayed } from "../../services/AnalyticsService";
import { Chart } from "react-google-charts";

const LastPlayedDataByGame = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchLastPlayed();

      const formattedData = [
        ["Game Name", "Last Played"],
        ...data.map((game) => [game.gameName, game.lastPlayed]),
      ];
      setChartData(formattedData);
    };
    loadChartData();
  }, []);

  const options = {
    title: "Game Last Played",
    titleTextStyle: { color: "#CE8147", fontSize: 14 },

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
      title: "Last Played",
      titleTextStyle: { color: "#CE8147", fontSize: 14 },
      textStyle: {
        color: "#CE8147",
        fontSize: 13,
        fontName: "serif",
      },
    },
    legend: "none",
    chartArea: { width: "85%", height: "65%", left: "10%", top: "15%" },
    backgroundColor: { fill: "transparent" },
  };
  return (
    <div className="border-2 w-96 overflow-x-auto p-2 dark:border-gray-400 dark:text-gray-400 mb-5 rounded-lg">
      <div className="min-w-[1000px]">
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

export default LastPlayedDataByGame;
