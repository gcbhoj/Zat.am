import React, { useEffect, useState } from "react";
import { getLastPlayedAndLastLogin } from "../../services/UserService";
import { Chart } from "react-google-charts";

const UserLastPlayedAndSignup = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await getLastPlayedAndLastLogin();
      console.log(data);

      const formattedData = [
        ["User Name", "Last Login", "Last Played"],
        ...data.map((user) => [user.userName, user.lastLogin, user.lastPlayed]),
      ];

      setChartData(formattedData);
    };
    loadChartData();
  }, []);

  const options = {
    title: "User Last SignIn & Last Played",
    curveType: "function",
    legend: {
      position: "bottom",
      textStyle: { color: "#CE8147", fontSize: 13 },
    },
    backgroundColor: { fill: "transparent" },
    titleTextStyle: { color: "#CE8147", fontSize: 14 },
    chartArea: { width: "85%", height: "65%", left: "10%", top: "15%" },
    hAxis: {
      title: "Account Created",
      titleTextStyle: { color: "#CE8147", fontSize: 13 },
      textStyle: { color: "#CE8147", fontSize: 12, fontName: "serif" },
      slantedText: true,
      slantedTextAngle: 90,
    },
    vAxis: {
      title: "Last Login & last Played",
      titleTextStyle: { color: "#CE8147", fontSize: 13 },
      textStyle: { color: "#CE8147", fontSize: 12, fontName: "serif" },
    },
  };
  return (
    <div className="border-2 w-96 overflow-x-auto p-2 dark:border-gray-400 dark:text-gray-400 mb-5 rounded-lg">
      <div className="min-w-[1000px]">
        {chartData.length > 1 ? (
          <Chart
            chartType="LineChart"
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

export default UserLastPlayedAndSignup;
