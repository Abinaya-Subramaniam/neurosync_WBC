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
        label: "Performance Metrics",
        data: [attempts, correct],
        backgroundColor: [
          "rgba(93, 173, 226, 0.8)",
          "rgba(46, 204, 113, 0.8)",
        ],
        borderColor: [
          "rgba(93, 173, 226, 1)",
          "rgba(46, 204, 113, 1)",
        ],
        borderWidth: 2,
        borderRadius: 12,
        hoverBackgroundColor: [
          "rgba(93, 173, 226, 1)",
          "rgba(46, 204, 113, 1)",
        ],
        hoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#6b7280',
          font: {
            family: "'Rubik', sans-serif",
            size: 14,
            weight: '500'
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: {
          family: "'Rubik', sans-serif",
          size: 14
        },
        bodyFont: {
          family: "'Rubik', sans-serif",
          size: 14
        },
        padding: 12,
        cornerRadius: 12,
        displayColors: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.05)',
          drawBorder: false
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: "'Rubik', sans-serif"
          }
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: "'Rubik', sans-serif",
            size: 14,
            weight: '600'
          }
        }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    }
  };

  return (
    <div style={{
      width: "100%",
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1.5rem",
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: "20px",
      boxShadow: "0 8px 32px rgba(124, 58, 237, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(8px)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative elements */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100px",
        height: "100px",
        background: "radial-gradient(circle, rgba(167,211,241,0.3) 0%, rgba(167,211,241,0) 70%)",
        zIndex: 0
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "150px",
        height: "150px",
        background: "radial-gradient(circle, rgba(216,207,248,0.2) 0%, rgba(216,207,248,0) 70%)",
        zIndex: 0
      }}></div>

      <h3 style={{
        margin: "0 0 1.5rem 0",
        color: "#7c3aed",
        fontSize: "1.5rem",
        fontWeight: "700",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
        📊 Your Emotion Recognition Progress
      </h3>

      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "1.5rem",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{
          textAlign: "center",
          padding: "0.8rem 1.2rem",
          background: "rgba(167, 211, 241, 0.15)",
          borderRadius: "14px",
          minWidth: "120px"
        }}>
          <div style={{ color: "#5dade2", fontWeight: "600" }}>Attempts</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3b82f6" }}>{attempts}</div>
        </div>

        <div style={{
          textAlign: "center",
          padding: "0.8rem 1.2rem",
          background: "rgba(46, 204, 113, 0.15)",
          borderRadius: "14px",
          minWidth: "120px"
        }}>
          <div style={{ color: "#2ecc71", fontWeight: "600" }}>Correct</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "700", color: "#10b981" }}>{correct}</div>
        </div>

        <div style={{
          textAlign: "center",
          padding: "0.8rem 1.2rem",
          background: "rgba(251, 191, 36, 0.15)",
          borderRadius: "14px",
          minWidth: "120px"
        }}>
          <div style={{ color: "#fbbf24", fontWeight: "600" }}>Accuracy</div>
          <div style={{ fontSize: "1.8rem", fontWeight: "700", color: "#f59e0b" }}>{accuracy}%</div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Bar data={data} options={options} />
      </div>

      <div style={{
        marginTop: "1.5rem",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#9ca3af",
        position: "relative",
        zIndex: 1
      }}>
        Keep practicing to improve your emotion recognition skills!
      </div>
    </div>
  );
};

export default ProgressChart;