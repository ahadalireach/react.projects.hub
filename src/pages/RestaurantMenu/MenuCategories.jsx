/* eslint-disable react/prop-types */

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((eachCategory, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(eachCategory)}
          >
            {eachCategory}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
