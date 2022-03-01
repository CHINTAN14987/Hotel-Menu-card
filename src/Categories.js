import React from "react";

const Categories = ({ categories, filteritems }) => {
  return (
    <div className="btn-container">
      {categories.map((c, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => {
              filteritems(c);
            }}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
