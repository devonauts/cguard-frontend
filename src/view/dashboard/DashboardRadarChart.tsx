import React from 'react';
import { Radar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
  labels: [
    'Response Time',
    'Patrol Completion',
    'Incident Resolution',
    'Client Satisfaction',
    'Equipment Check',
    'Report Quality',
    'Communication',
  ],
  datasets: [
    {
      label: 'Day Shift Guards',
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      borderColor: 'rgba(34, 197, 94, 1)',
      pointBackgroundColor: 'rgba(34, 197, 94, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(34, 197, 94, 1)',
      data: [85, 92, 88, 90, 95, 87, 91],
    },
    {
      label: 'Night Shift Guards',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      data: [82, 89, 94, 86, 91, 83, 88],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Security Guard Performance Metrics (%)',
      font: {
        size: 16,
        weight: 'bold' as const,
      },
      position: 'top' as const,
    },
    legend: {
      position: 'bottom' as const,
    },
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      beginAtZero: true,
      ticks: {
        stepSize: 20,
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      pointLabels: {
        font: {
          size: 12,
        },
      },
    },
  },
};

export default function DashboardRadarChart(props) {

    return <Radar data={data} options={options} />;
}
