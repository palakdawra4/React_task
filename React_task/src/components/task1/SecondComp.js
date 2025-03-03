import React from "react";

const SecondComp = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} placeholder="Enter number 2" />;
};

export default SecondComp;
