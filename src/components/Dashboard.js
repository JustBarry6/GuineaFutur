import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import '../assets/styles/components/Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    annotation: {
      annotations: {
        line1: {
          type: 'line',
          yMin: 5,
          yMax: 5,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          label: {
            content: 'Goal',
            enabled: true,
            position: 'center',
          },
        },
      },
    },
  },
};

function Dashboard({ data }) {
  if (!data || !data.datasets) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Real-time tracking of proposals and projects.</p>
      <Line data={data} options={options} />
      <div className="kpi">
        <p>Total Proposals Submitted: {data.datasets[0].data.reduce((a, b) => a + b, 0)}</p>
        <p>Total Proposals Approved: {data.datasets[1].data.reduce((a, b) => a + b, 0)}</p>
        <p>Total Proposals Rejected: 10</p>
      </div>
    </div>
  );
}

export default Dashboard;
