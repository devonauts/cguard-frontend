import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const data = {
  datasets: [
    {
      data: [28, 22, 18, 15, 12],
      backgroundColor: [
        'rgba(239, 68, 68, 0.8)',   // Red for alarm monitoring
        'rgba(34, 197, 94, 0.8)',  // Green for patrol services
        'rgba(59, 130, 246, 0.8)', // Blue for access control
        'rgba(245, 158, 11, 0.8)', // Orange for CCTV monitoring
        'rgba(168, 85, 247, 0.8)', // Purple for consulting
      ],
      borderColor: [
        'rgba(239, 68, 68, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(168, 85, 247, 1)',
      ],
      borderWidth: 2,
    },
  ],
  labels: [
    'Alarm Monitoring',
    'Security Patrols',
    'Access Control',
    'CCTV Surveillance',
    'Security Consulting',
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Service Revenue Distribution (%)',
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
    r: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
};

export default function DashboardPolarChart(props) {
    return <PolarArea data={data} options={options} />;
}
