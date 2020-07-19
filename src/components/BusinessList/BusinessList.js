import React from "react";
import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
  console.log(JSON.stringify(businesses, null, 2));

  if (businesses.length === 0) {
    return (
      <div className="business-list__pre-search">
        <h2>Bul Bana!</h2>
      </div>
    );
  }

  return (
    <div className="business-list__container">
      <h2 className="business-list__header">İşletmeler</h2>
      <div className="business-list">
        {businesses.map((business) => {
          return <Business business={business} key={business.id} />;
        })}
      </div>
    </div>
  );
};

export default BusinessList;
