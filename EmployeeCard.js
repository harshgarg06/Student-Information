// src/components/EmployeeCard.js
import React from 'react';

const EmployeeCard = ({ employee }) => (
  <div className="employee-card">
    <img src = {employee.img} alt={employee.name} className="employee-img" />
    <h3>{employee.name}</h3>
    <p>{employee.role}</p>
    <p>{employee.email}</p>
    <div className="button-group">
      <button className="block-button">Block</button>
      <button className="details-button">Details</button>
    </div>
  </div>
);

export default EmployeeCard;
