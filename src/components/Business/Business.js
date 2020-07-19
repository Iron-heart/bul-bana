import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const Business = ({ business }) => {
  return (
    <Link to={`details/${business.id}`}>
      <div className="business">
        <div className="business__image-container">
          <img src={business.imageSrc} alt="İşletme Görseli" />
        </div>

        <div className="business__information">
          <p className="business__header">{business.name}</p>

          <div className="business__review">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starColor={"#0b8457"}
              starCount={5}
              value={business.rating}
            />
            <p className="business__review-count">
              {business.reviewCount} Oylama
            </p>
          </div>
          <p>{business.category}</p>
          <div className="business__address">
            <p className="business__address-text">{business.address}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Business;
