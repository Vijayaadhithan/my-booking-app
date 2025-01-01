import React from "react";
import "./../styles/ServiceTable.css";

const ServiceTable = ({ services }) => {
  return (
    <table className="service-table">
      <thead>
        <tr>
          <th>Service Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td>{service.name}</td>
            <td>${service.price}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;
