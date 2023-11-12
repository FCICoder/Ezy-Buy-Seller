import React, { useContext } from "react";
import Card from "../UI/Card";
import { Chart } from "primereact/chart";
import { MenuContext } from "../../contexts/Menu";
const LastProducts = () => {
  const menuCtx = useContext(MenuContext);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My Sales",
        backgroundColor: "#ECA869",
        borderColor: "#ECA869",
        data: [65, 59, 80, 81, 56, 55, 40],
        
      },
      {
        label: "My Leads",
        backgroundColor: "pink",
        borderColor: "pink",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          fontColor: `${menuCtx.darkMode ? "white" : "gray"}`,
          fontWeight: 'bold'
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: `${menuCtx.darkMode ? "white" : "gray"}`,
          font: {
            weight: 'bold',
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: `${menuCtx.darkMode ? "white" : "gray"}`,
        },
        grid: {
          color: `${menuCtx.darkMode ? "white" : "gray"}`,
          drawBorder: false,
        },
      },
    },
  };
  return (
    <Card>
      <Chart
        type="bar"
        data={data}
        options={options}
        style={{ height: "250px" }}
      />
    </Card>
  );
};

export default LastProducts;
