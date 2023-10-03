import moment from 'moment';
import React, { useState } from 'react';
import './Times.css';

const Times = () => {
  const [selectedTime, setSelectedTime] = useState(moment());

  // Function to handle time selection
  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(moment(newTime, 'HH:mm'));
  };

  // Get the current time as a string in HH:mm format
  const currentTime = moment().format('HH:mm');

  return (
    <>
      <div className='time'>
        <h2>Time Picker</h2>
        <input
          className='times'
          type="time"
          value={selectedTime.format('HH:mm')}
          onChange={handleTimeChange}
          min={currentTime} // Set min attribute to allow only future times
        />
        <p>Selected Time: {selectedTime.format('hh:mm A')}</p> {/* Format in 12-hour with AM/PM */}

      </div>
    </>
  );
};

export default Times;
