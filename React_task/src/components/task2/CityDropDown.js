import React from "react";

const CityDropdown = ({ cities, selectedCity, onSelectCity }) => {
  return (
    <select value={selectedCity} onChange={(e) => onSelectCity(e.target.value)} disabled={!cities.length}>
      <option value="">Select City</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CityDropdown;
