import React from "react";

const SoldierCard = ({ name, description, strengths, weaknesses, image }) => {
  return (
    <div className="soldier-card">
      <img src={image} alt={name} className="soldier-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Strengths:</strong> {strengths}</p>
      <p><strong>Weaknesses:</strong> {weaknesses}</p>
    </div>
  );
};

export default SoldierCard;
