import React from "react";
import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
  console.log(JSON.stringify(businesses));
  return (
    <div>
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
