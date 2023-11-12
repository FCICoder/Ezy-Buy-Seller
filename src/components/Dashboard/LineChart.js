import React, { useContext } from 'react'
import Card from '../UI/Card';
import { Chart } from "primereact/chart";
import { MenuContext } from '../../contexts/Menu';
const LineChart = () => {
  const menuCtx = useContext(MenuContext)
      const data = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "New CLients",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            tension: 0.4,
            borderColor: "#7286D3",
          },
          {
            label: "Premium Clients",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderDash: [5, 5],
            tension: 0.4,
            borderColor: "#B08BBB",
          },
          {
            label: "Active Clients",
            data: [12, 51, 62, 33, 21, 62, 45],
            fill: true,
            borderColor: "#A0C3D2",
            tension: 0.4,
            backgroundColor: "#F7F5EB",
          },
        ],
      };
      const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: `${menuCtx.darkMode ? "white" : "gray"}`,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: `${menuCtx.darkMode ? "white" : "gray"}`,
            },
            grid: {
              color: `${menuCtx.darkMode ? "white" : "gray"}`,
            },
          },
          y: {
            ticks: {
              color: `${menuCtx.darkMode ? "white" : "gray"}`,
            },
            grid: {
              color: `${menuCtx.darkMode ? "white" : "gray"}`,
            },
          },
        },
      };
  return (
    <Card>
      <Chart type="line" data={data} options={options} style={{height:'400px'}} />
    </Card>
  );
}

export default LineChart