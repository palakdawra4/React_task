import React from "react";

const CountryDropdown = ({ countries, selectedCountry, onSelectCountry }) => {
  return (
    <select value={selectedCountry} onChange={(e) => onSelectCountry(e.target.value)}>
      <option value="">Select Country</option>
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountryDropdown;
