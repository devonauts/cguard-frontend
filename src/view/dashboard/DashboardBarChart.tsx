import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/dashboardService';

export default function DashboardBarChart(props) {
  const [data, setData] = useState({
    labels: [],
    datasets: [{
      label: 'New Clients Acquired',
      backgroundColor: 'rgba(34, 197, 94, 0.8)',
      borderColor: 'rgba(34, 197, 94, 1)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(34, 197, 94, 0.9)',
      hoverBorderColor: 'rgba(34, 197, 94, 1)',
      data: [],
    }],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DashboardService.getStats();
        const clientAcquisition = response.clientAcquisition || [];
        
        setData({
          labels: clientAcquisition.map(item => item.month),
          datasets: [{
            label: 'New Clients Acquired',
            backgroundColor: 'rgba(34, 197, 94, 0.8)',
            borderColor: 'rgba(34, 197, 94, 1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(34, 197, 94, 0.9)',
            hoverBorderColor: 'rgba(34, 197, 94, 1)',
            data: clientAcquisition.map(item => item.count),
          }],
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // Keep default empty data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Client Acquisition',
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
        display: false,
      },
      y: {
        display: true,
      },
    },
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <Bar
      data={data}
      options={options}
      width={100}
      height={50}
    />
  );
}
