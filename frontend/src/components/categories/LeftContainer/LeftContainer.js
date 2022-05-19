import React from "react";
import "./LeftContainer.css";

const LeftContainer = () => {
  return (
    <div className="leftContainer">
      <div className="filter-container">
        <div className="card">
          <span className="filter-heading">FILTERS</span>
        </div>
        <div className="filter-discount">
          <span className="filter-title">discount</span>
          <div className="filter-condition">
            <label for="disc_less_10" className="filter-checkbox-label">
              <input
                type="checkbox"
                id="disc_less_10"
                name="disc_less_10"
                value="10"
                className="filter-checkbox"
              />
              Less then 10%
            </label>

            <label for="disc_less_10" className="filter-checkbox-label">
              <input
                type="checkbox"
                id="disc_less_10"
                name="disc"
                value="10"
                className="filter-checkbox"
              />
              10% and above
            </label>

            <label for="disc_less_10" className="filter-checkbox-label">
              <input
                type="checkbox"
                id="disc_less_10"
                name="disc"
                value="10"
                className="filter-checkbox"
              />
              20% and above
            </label>

            <label for="disc_less_10" className="filter-checkbox-label">
              <input
                type="checkbox"
                id="disc_less_10"
                name="disc"
                value="10"
                className="filter-checkbox"
              />
              30% and above
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
