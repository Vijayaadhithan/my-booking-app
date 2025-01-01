import React from "react";
import "./../styles/FavoritesList.css";

const FavoritesList = ({ favorites }) => {
  return (
    <div className="favorites-list">
      {favorites.map((service) => (
        <div key={service.id} className="favorite-item">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
