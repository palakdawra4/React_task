import React from "react";

const FirstComp = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} placeholder="Enter number 1" />;
};

export default FirstComp;
