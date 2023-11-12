import React from "react";
import Card from "../UI/Card";
import { MostActive } from "./DummyData/DummyClients";
import classes from "./Most.module.css";
const MostActiveClients = () => {
  return (
    <Card>
      <h1 className="font-bold">Most Active Clients</h1>
      <div className={classes.group}>
        {MostActive.map((client) => {
          return (
            <div className={classes.object}>
              <div className={classes.details}>
                <img
                  src={`https://primefaces.org/cdn/primereact/images/avatar/${client.representative.image}`} alt='a'
                />
                <div>
                  <h3 className="font-bold">{client.representative.name}</h3>
                  <h4>{client.country.name}</h4>
                </div>
              </div>
              <p className="font-bold"> {client.activity} Sales</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default MostActiveClients;
