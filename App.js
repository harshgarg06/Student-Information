// src/App.js
import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import SearchBar from './components/SearchBar';
import './assests/css/style.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Update search term whenever the user types
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <SearchBar onSearch={handleSearch} />
        <h1>Employees</h1>
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">Active</button>
          <button className="filter-button">Inactive</button>
        </div>
      </header>
      <EmployeeList searchTerm={searchTerm} />
    </div>
  );
};

export default App;

