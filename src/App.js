import React, { useMemo, useState } from "react";
import './App.css';

export const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  function onWeightChange(event){
    setWeight(event.target.value)
  }

  function onHeightChange(event){
    setHeight(event.target.value)
  }

  const output = useMemo(()=>{
    const CalculateHeight = height /100;

    return(weight/CalculateHeight*CalculateHeight).toFixed(1)
  },[weight,height]);  

  return (
    <main>
      <h1>Project 4: BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight}kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height:{height}cm</p>
        <input className="input-slider" type="range"
           onChange={onHeightChange} />
      </div>
      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};
