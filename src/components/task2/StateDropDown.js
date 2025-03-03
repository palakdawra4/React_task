import React from "react";

const StateDropdown = ({ states, selectedState, onSelectState }) => {
  return (
    <select value={selectedState} onChange={(e) => onSelectState(e.target.value)} disabled={!states.length}>
      <option value="">Select State</option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default StateDropdown;
