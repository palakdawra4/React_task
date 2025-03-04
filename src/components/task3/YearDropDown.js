import React from "react";

const YearDropdown = ({ selectedYear, setSelectedYear }) => {
  const currentYear = new Date().getFullYear();

  
  const years = [];
  for (let i = 1960; i <= currentYear; i++) {
    years.push(i);
  }

  return (
    <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  );
};

export default YearDropdown;
