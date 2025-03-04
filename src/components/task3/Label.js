import React from "react";

const DateLabel = ({ selectedYear, selectedMonth, selectedDate }) => {
  if (!selectedYear || selectedMonth === "" || selectedDate === "") return null;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dateObject = new Date(selectedYear, selectedMonth, selectedDate);
  const dayName = dateObject.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <h3>Selected Date: {dayName}, {selectedDate} {monthNames[selectedMonth]} {selectedYear}</h3>
  );
};

export default DateLabel;
