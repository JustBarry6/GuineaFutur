import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../assets/styles/components/Analytics.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Analytics({ data }) {
  if (!data || !data.labels || !data.datasets) {
    return <p>Loading...</p>; // Afficher un message de chargement si les données ne sont pas disponibles
  }

  const approvalData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Approval Rate',
        data: data.datasets[1].data, // Utiliser les données d'approbation
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const approvalOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const processingTimeData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Average Processing Time (days)',
        data: [5, 4, 3, 6, 2, 3, 4], // Exemple de données pour le temps de traitement moyen
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const processingTimeOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <div className="chart-container">
        <Bar data={approvalData} options={approvalOptions} />
      </div>
      <div className="chart-container">
        <Bar data={processingTimeData} options={processingTimeOptions} />
      </div>
    </div>
  );
}

export default Analytics;
