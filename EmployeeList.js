// src/components/EmployeeList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';
import { employees } from '../data/employees';

const EmployeeList = ({ searchTerm }) => {
  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm) || 
    employee.role.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="employee-list">
      {filteredEmployees.length > 0 ? (
        filteredEmployees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
};

export default EmployeeList;
