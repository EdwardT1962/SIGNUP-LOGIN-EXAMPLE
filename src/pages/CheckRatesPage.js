import React, { useState } from 'react';
import RateCalculator from '../components/RateCalculator';
import ScheduleTrip from '../components/ScheduleTrip';
import PackagePreview from '../components/PackagePreview';


function CheckRatesPage() {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(null);
  const [packageDetails, setPackageDetails] = useState(null);

  const calculateRate = () => {
    // Example calculation logic
    const calculatedRate = distance * 1.5 + time * 0.5;
    setRate(calculatedRate);
  };

  const scheduleTrip = () => {
    // Logic to schedule the trip
  };

  const selectPackage = (selectedPackage) => {
    // Logic to select and preview the package
    setPackageDetails(selectedPackage);
  };

  return (
    <div>
      <h1>Check Rates & Schedule Trips</h1>
      <RateCalculator
        distance={distance}
        setDistance={setDistance}
        time={time}
        setTime={setTime}
        calculateRate={calculateRate}
        rate={rate}
      />
      <ScheduleTrip scheduleTrip={scheduleTrip} />
      <PackagePreview packageDetails={packageDetails} selectPackage={selectPackage} />
      {rate && <p>Estimated Rate: ${rate}</p>}
    </div>
  );
}

export default CheckRatesPage;
