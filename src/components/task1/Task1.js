import React, { useState } from "react";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";
import FourthComp from "./FourthComp";

const Task1 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2>Task 1: Sum of Two Numbers</h2>
      <FirstComp value={num1} onChange={(e) => setNum1(e.target.value)}/><br/>
      <SecondComp value={num2} onChange={(e) => setNum2(e.target.value)} /><br/>
      <ThirdComp onClick={handleCalculate} />
      <FourthComp result={result} />
    </div>
  );
};

export default Task1;
