import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
  labels: [
    'Residential Security',
    'Commercial Security',
    'Industrial Security',
    'Event Security',
  ],
  datasets: [
    {
      data: [45, 35, 15, 5], // Percentage distribution
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',   // Green for residential
        'rgba(59, 130, 246, 0.8)',  // Blue for commercial
        'rgba(245, 158, 11, 0.8)',  // Orange for industrial
        'rgba(168, 85, 247, 0.8)',  // Purple for events
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(168, 85, 247, 1)',
      ],
      borderWidth: 2,
      hoverBackgroundColor: [
        'rgba(34, 197, 94, 0.9)',
        'rgba(59, 130, 246, 0.9)',
        'rgba(245, 158, 11, 0.9)',
        'rgba(168, 85, 247, 0.9)',
      ],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Client Portfolio Distribution',
      font: {
        size: 16,
        weight: 'bold' as const,
      },
      color: '#1f2937',
      padding: 20,
    },
    legend: {
      display: true,
      position: 'bottom' as const,
    },
  },
};

export default function DashboardDoughnutChart(props) {
  return <Doughnut data={data} options={options} />;
}
