import React from 'react';
import { Chart } from 'react-chartjs-2';
import { i18n } from 'src/i18n';

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Customer Satisfaction vs Service Quality',
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
  elements: {
    line: {
      fill: false,
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
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      title: {
        display: true,
        text: 'Customer Satisfaction (%)',
      },
      min: 80,
      max: 100,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      title: {
        display: true,
        text: 'Service Quality Score',
      },
      min: 4.0,
      max: 5.0,
      grid: {
        display: false,
      },
    },
  },
};

const data2 = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],
  datasets: [
    {
      label: 'Service Quality Score (1-5)',
      type: 'line' as const,
      data: [4.2, 4.5, 4.3, 4.6, 4.7, 4.4, 4.8],
      fill: false,
      borderColor: '#F59E0B',
      backgroundColor: '#F59E0B',
      pointBorderColor: '#F59E0B',
      pointBackgroundColor: '#F59E0B',
      pointHoverBackgroundColor: '#F59E0B',
      pointHoverBorderColor: '#F59E0B',
      yAxisID: 'y1',
      tension: 0.3,
    },
    {
      type: 'line' as const,
      label: 'Customer Satisfaction (%)',
      data: [87, 89, 85, 92, 94, 88, 96],
      fill: false,
      backgroundColor: '#10B981',
      borderColor: '#10B981',
      pointBorderColor: '#10B981',
      pointBackgroundColor: '#10B981',
      hoverBackgroundColor: '#10B981',
      hoverBorderColor: '#10B981',
      yAxisID: 'y',
      tension: 0.3,
    },
  ],
};

export default function DashboardMixChartTwo(props) {
  return <Chart type="line" data={data2} options={options} />;
}
