import React from 'react';

const Categories = ({filterItems, categories}) => {

  return (
    <div className='btn-container'>
      {categories.map((eachCategory, index) => {
        return <button key={index} className='filter-btn' onClick={() => filterItems(eachCategory)}>{eachCategory}</button>
      })}
      {/* <button className='filter-btn' onClick={() => filterItems('breakfast')}>Breakfast</button> */}
    </div>
  );

};

export default Categories;
