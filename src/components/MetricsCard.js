import React from "react";
import "./../styles/MetricsCard.css";

const MetricsCard = ({ title, value }) => {
  return (
    <div className="metrics-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default MetricsCard;
