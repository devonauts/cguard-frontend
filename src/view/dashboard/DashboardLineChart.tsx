import React from 'react';
import { Line } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Monthly Revenue ($K)',
      fill: false,
      tension: 0.3, // Smoother curve
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 3,
      pointBorderColor: 'rgba(59, 130, 246, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 3,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [125, 142, 138, 156, 168, 175, 182, 195, 208, 225, 240, 258], // Growing revenue trend
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Monthly Revenue Growth Trend',
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
  scales: {
    x: {
      display: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
    y: {
      display: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)',
      },
      beginAtZero: false,
    },
  },
};

export default function DashboardLineChart(props) {
  return <Line data={data} options={options} />;
}
