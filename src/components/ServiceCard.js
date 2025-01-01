import React from "react";
import "./../styles/ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p><strong>Price:</strong> ${service.price}</p>
      <button>View Details</button>
    </div>
  );
};

export default ServiceCard;
