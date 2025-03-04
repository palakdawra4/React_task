import React from "react";

const DateDropdown = ({ selectedYear, selectedMonth, selectedDate, setSelectedDate, currentYear, currentMonth, currentDate }) => {
  if (!selectedYear || selectedMonth === "") return null;

 
  const daysInMonth = new Date(selectedYear, Number(selectedMonth) + 1, 0).getDate();
  let availableDates = [];
  for (let i = 1; i <= daysInMonth; i++) {
    availableDates.push(i);
  }
  

  if (selectedYear == currentYear && selectedMonth == currentMonth) {
    availableDates = availableDates.slice(0, currentDate);
  }

  return (
    <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
      <option value="">Select Date</option>
      {availableDates.map((date) => (
        <option key={date} value={date}>{date}</option>
      ))}
    </select>
  );
};

export default DateDropdown;
