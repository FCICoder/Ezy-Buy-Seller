import React from "react";
import Container from "../UI/Container";
import OrdersData from "./OrdersData";
import OrdersStats from "./OrdersStats";

const Orders = () => {
  return (
    <Container>
      <div style={{ maxHight: "1200px" }}>
        <OrdersData />
      </div>
      <div style={{ gridColumn: "span 2" }}>
        <OrdersStats />
      </div>
    </Container>
  );
};

export default Orders;
