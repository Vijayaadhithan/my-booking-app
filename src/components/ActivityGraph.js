import React from "react";
import { Line } from "react-chartjs-2";

const ActivityGraph = ({ data }) => {
  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: "Bookings Per Month",
        data: data?.values || [],
        borderColor: "#007bff",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Line data={chartData} />
    </div>
  );
};

export default ActivityGraph;
