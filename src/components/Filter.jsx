import React, { useState } from 'react';
import '../style/main.scss';
import Button from './Button';

const Filter = ({ isDark, handleToggleAllCards }) => {
  const [activeFilter, setActiveFilter] = useState("All"); 
  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
    handleToggleAllCards(filterName);
  };
  

  return (
    <div className="filter">
      <h1>Extensions List</h1>
      <div className="buttons">
        <Button name="All" isDark={isDark} isActive={activeFilter === "All"} onClick={() => handleFilterClick("All")} />
        <Button name="Active" isDark={isDark} isActive={activeFilter === "Active"} onClick={() => handleFilterClick("Active")} />
        <Button name="Inactive" isDark={isDark} isActive={activeFilter === "Inactive"} onClick={() => handleFilterClick("Inactive")} />
      </div>
    </div>
  );
};

export default Filter;
