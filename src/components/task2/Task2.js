import React, { useState } from "react";
import CountryDropdown from "./CountryDropDown";
import StateDropdown from "./StateDropDown";
import CityDropdown from "./CityDropDown";


const countryStateCityData = {
    India: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
      Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
      TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Salem"],
      WestBengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco", "San Diego", "San Jose"],
      Texas: ["Houston", "Austin", "Dallas", "San Antonio"],
      NewYork: ["New York City", "Buffalo", "Rochester", "Syracuse"],
      Florida: ["Miami", "Orlando", "Tampa", "Jacksonville"],
      Illinois: ["Chicago", "Springfield", "Naperville", "Peoria"],
    },
    Canada: {
      Ontario: ["Toronto", "Ottawa", "Mississauga", "Hamilton"],
      BritishColumbia: ["Vancouver", "Victoria", "Kelowna", "Surrey"],
      Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau"],
      Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge"],
    },
    Australia: {
      NewSouthWales: ["Sydney", "Newcastle", "Wollongong", "Tamworth"],
      Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
      Queensland: ["Brisbane", "Gold Coast", "Cairns", "Townsville"],
      WesternAustralia: ["Perth", "Fremantle", "Bunbury", "Albany"],
    },
    UK: {
      England: ["London", "Manchester", "Birmingham", "Liverpool"],
      Scotland: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
      Wales: ["Cardiff", "Swansea", "Newport", "Wrexham"],
      NorthernIreland: ["Belfast", "Derry", "Lisburn", "Newry"],
    },
  };
  
const Task2 = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");


  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState(""); 
    setSelectedCity(""); 
  };


  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity(""); 
  };

  return (
    <div>
      <h2>Task 2: Cascading Dropdown</h2>
      
      <CountryDropdown
        countries={Object.keys(countryStateCityData)}
        selectedCountry={selectedCountry}
        onSelectCountry={handleCountryChange}
      /><br/><br/>
      
      <StateDropdown
        states={selectedCountry ? Object.keys(countryStateCityData[selectedCountry]) : []}
        selectedState={selectedState}
        onSelectState={handleStateChange}
      /><br/><br/>

      <CityDropdown
        cities={selectedState ? countryStateCityData[selectedCountry][selectedState] : []}
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      /><br/><br/>

      <h3>Selected Location: {selectedCity ? `${selectedCity}, ${selectedState}, ${selectedCountry}` : "None"}</h3>
    </div>
  );
};

export default Task2;
