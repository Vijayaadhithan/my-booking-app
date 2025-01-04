import React from "react";
import { Line } from "react-chartjs-2";

const ActivityGraph = ({ data }) => {
    const chartData = {
        labels: data?.labels || [],
        datasets: [
            {
                label: "Bookings Per Month",
                data: data?.values || [],
                borderColor: "#007bff",  // More visually appealing color
                backgroundColor: 'rgba(0, 123, 255, 0.2)',  // Added fill color with transparency
                borderWidth: 2,
                tension: 0.3,  // Added tension for smoother curves
                pointRadius: 4,  //  Increased point radius
                pointBackgroundColor: '#007bff', // Changed point color
            },
        ],
    };

    const chartOptions = {  // Added chart options
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,  // Set step size for y-axis ticks
                },
            },
        },
    };

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Line data={chartData} options={chartOptions} />  {/* Pass chartOptions */}
        </div>
    );
};

export default ActivityGraph;