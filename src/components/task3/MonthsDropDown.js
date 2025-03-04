import React from "react";

const MonthDropdown = ({ selectedYear, selectedMonth, setSelectedMonth, currentYear }) => {
  if (!selectedYear) return null; // Show nothing if no year is selected

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const availableMonths = selectedYear == currentYear ? months.slice(0, new Date().getMonth() + 1) : months;

  return (
    <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
      <option value="">Select Month</option>
      {availableMonths.map((month, index) => (
        <option key={index} value={index}>{month}</option>
      ))}
    </select>
  );
};

export default MonthDropdown;
