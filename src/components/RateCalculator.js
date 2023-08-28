// src/components/RateCalculator.js
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import './RateCalculator.css';


function RateCalculator() {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(null);

  const calculateRate = () => {
    // Example calculation logic
    const calculatedRate = distance * 1.5 + time * 0.5;
    setRate(calculatedRate);
  };

  return (
    <div className="rate-calculator">
      <InputField label="Distance" type="number" name="distance" value={distance} onChange={(e) => setDistance(e.target.value)} />
      <InputField label="Time" type="number" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <Button label="Calculate" onClick={calculateRate} />
      {rate && <p>Calculated Rate: ${rate}</p>}
    </div>
  );
}

export default RateCalculator;
