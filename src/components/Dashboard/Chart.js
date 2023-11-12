import React, { useContext } from "react";
import Card from "../UI/Card";
import { Chart } from "primereact/chart";
import { MenuContext } from "../../contexts/Menu";
const Chart2 = () => {
  const menuCtx = useContext(MenuContext);
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "#B9F3E4",
          "#EA8FEA",
          "#FFAACF",
          "#C9F4AA",
          "#BDCDD6",
        ],
        borderColor: [
          "transparent",
          "transparent",
          "transparent",
          "transparent",
          "transparent",
        ],
        label: "My Sales",
      },
    ],
    labels: ["Sales", "Clients", "Profits", "Leads", "Signups"],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: `${menuCtx.darkMode ? "white" : "gray"}`,
        },
      },
    },
    scales: {
      r: {
        grid: {
          color: "gray",
        },
      },
    },
  };

  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Your Last Data
        </h1>
        <Chart
          type="polarArea"
          data={data}
          options={options}
          style={{ position: "relative",width:'220px' }}
        />
      </div>
    </Card>
  );
};

export default Chart2;
