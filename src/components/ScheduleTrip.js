import React from 'react';

function ScheduleTrip({ scheduleTrip }) {
  return (
    <div className="schedule-trip">
      <h2>Schedule Your Trip</h2>
      <label>Date:</label>
      <input type="date" />
      <label>Time:</label>
      <input type="time" />
      <button onClick={scheduleTrip}>Schedule Trip</button>
    </div>
  );
}

export default ScheduleTrip;
