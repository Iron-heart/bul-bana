import React from "react";

const Business = ({ business }) => {
  return (
    <div className="business">
      <div className="business__image-container">
        <img src={business.imageSrc} alt="İşletme Görseli" />
      </div>

      <div className="business__information">
        <h2 className="business__header">{business.name}</h2>
        <div className="business__address">
          <p className="business__address-text">{business.address}</p>
          <p className="business__address-text">{business.city}</p>
        </div>
        <div className="business__reviews">
          <h3 className="business__reviews-header">{business.category}</h3>
          <h3 className="business__rating">{business.rating}</h3>
        </div>
      </div>
    </div>
  );
};

export default Business;
