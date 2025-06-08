// SkipCard.js
import React from 'react';

const SkipCard = ({ size, price, imageSrc, onSelect, isSelected }) => {
  return (
    <div className={`skip-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      {}
      <div className="circle">
        {size} Yards
      </div>
      <img src={imageSrc} alt={`${size} Yard`} />
      <div className="card-details">
        <h3>{size} Yard Skip</h3>
        <p>14 day hire period</p>
        <p>£{price}</p>
        {}
        <button>{isSelected ? 'Selected' : 'Select This Skip'}</button>
      </div>
    </div>
  );
};

export default SkipCard;
