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
      text: 'Security Performance vs Response Times',
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
        text: 'Security Incidents Handled',
      },
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
        text: 'Response Time (minutes)',
      },
      grid: {
        display: false,
      },
    },
  },
};

const data1 = {
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
      label: 'Average Response Time (min)',
      type: 'line' as const,
      data: [8.5, 7.2, 6.8, 7.5, 6.1, 5.9, 6.3],
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
      type: 'bar' as const,
      label: 'Incidents Handled',
      data: [245, 289, 312, 267, 338, 295, 321],
      fill: false,
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: '#3B82F6',
      hoverBackgroundColor: 'rgba(59, 130, 246, 0.9)',
      hoverBorderColor: '#3B82F6',
      yAxisID: 'y',
    },
  ],
};

export default function DashboardMixChartOne(props) {
  return <Chart type="bar" data={data1} options={options} />;
}
