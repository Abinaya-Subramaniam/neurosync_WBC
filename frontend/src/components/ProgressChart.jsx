import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressChart = ({ attempts, correct }) => {
  const accuracy = attempts > 0 ? ((correct / attempts) * 100).toFixed(1) : 0;

  const data = {
    labels: ["Attempts", "Correct"],
    datasets: [
      {
        label: "This Month's Emotion Attempts",
        data: [attempts, correct],
        backgroundColor: ["#5dade2", "#2ecc71"],
        borderRadius: 10,
      },
    ],
  };

  return (
    <div style={{ width: "70%", margin: "0 auto", marginTop: "40px" }}>
      <h3>📊 Progress This Month</h3>
      <p>Total Attempts: {attempts}</p>
      <p>Correct Matches: {correct}</p>
      <p>Accuracy: {accuracy}%</p>
      <Bar data={data} />
    </div>
  );
};

export default ProgressChart;