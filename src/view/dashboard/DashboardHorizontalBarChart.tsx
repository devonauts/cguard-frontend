import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'src/i18n';
import DashboardService from 'src/modules/dashboard/dashboardService';

export default function DashboardHorizontalBarChart(props) {
  const [data, setData] = useState({
    labels: [],
    datasets: [{
      label: 'Incidents Handled',
      backgroundColor: 'rgba(239, 68, 68, 0.8)',
      borderColor: 'rgba(239, 68, 68, 1)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(239, 68, 68, 0.9)',
      hoverBorderColor: 'rgba(239, 68, 68, 1)',
      data: [],
    }],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DashboardService.getStats();
        const incidentTypes = response.incidentTypes || [];
        
        setData({
          labels: incidentTypes.map(item => item.type),
          datasets: [{
            label: 'Incidents Handled',
            backgroundColor: 'rgba(239, 68, 68, 0.8)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(239, 68, 68, 0.9)',
            hoverBorderColor: 'rgba(239, 68, 68, 1)',
            data: incidentTypes.map(item => item.count),
          }],
        });
      } catch (error) {
        console.error('Error fetching incident data:', error);
        // Keep default empty data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Security Incident Types',
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
