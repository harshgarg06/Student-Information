// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search" 
      className="search-bar" 
      onChange={handleInputChange} 
    />
  );
};

export default SearchBar;
