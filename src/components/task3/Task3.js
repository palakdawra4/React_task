import React, { useState } from "react";
import YearDropdown from "./YearDropDown";
import MonthDropdown from "./MonthsDropDown";
import DateDropdown from "./DateDropDown";
import DateLabel from "./Label";

const Task3 = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); 
  const currentDate = new Date().getDate();

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div>
      <h2>Task 3: Date Selection</h2>

  
      <YearDropdown selectedYear={selectedYear} setSelectedYear={setSelectedYear} />

      <MonthDropdown 
        selectedYear={selectedYear} 
        selectedMonth={selectedMonth} 
        setSelectedMonth={setSelectedMonth} 
        currentYear={currentYear}
      />

      <DateDropdown 
        selectedYear={selectedYear} 
        selectedMonth={selectedMonth} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        currentYear={currentYear} 
        currentMonth={currentMonth} 
        currentDate={currentDate} 
      />

      <DateLabel selectedYear={selectedYear} selectedMonth={selectedMonth} selectedDate={selectedDate} />
    </div>
  );
};

export default Task3;
