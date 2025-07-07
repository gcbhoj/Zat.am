import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { getNumberOfUsersByQuarter } from "../../services/UserService";

const UsersByQuarters = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      const data = await getNumberOfUsersByQuarter();
      console.log(data);
      setChartData(data);
    };
    loadChartData();
  }, []);

  const options = {
    title: "Number of User's Quarterly",
    titleTextStyle: { color: "#CE8147", fontSize: 14 },
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: { fill: "transparent" },
    hAxis: {
      title: "Quarter",
      textStyle: { color: "#CE8147", fontSize: 12 },
      titleTextStyle: { color: "#CE8147", fontSize: 14 },
    },
    vAxis: {
      title: "Number of Users",
      minValue: 0,
      textStyle: { color: "#CE8147", fontSize: 12 },
      titleTextStyle: { color: "#CE8147", fontSize: 14 },
    },
    chartArea: { width: "85%", height: "65%", left: "10%", top: "15%" },
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

export default UsersByQuarters;
