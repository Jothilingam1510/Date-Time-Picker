import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Date.css';

const DateComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
  const today = new Date(); // Get today's date
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const yes = new Date(today);
  yes.setDate(today.getDate() - 1);
  return (
    <>
         <h2>Date Picker</h2>

      <DatePicker
        className='Date'
        placeholderText='Past Date only'
        selected={selectedDate}
        onChange={handleDateChange}
        maxDate={yes} // Set the minimum date to one day ahead
      />
      <DatePicker
        className='Date'
        placeholderText='Current & Past Date'
        selected={selectedDate}
        onChange={handleDateChange}
        maxDate={today} // Set the maximum date to today
      />
        <DatePicker
        className='Date'
        placeholderText='Today date'
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={today}
        maxDate={today}
        />
        <DatePicker
        className='Date'
        placeholderText='Current & Future Date'
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={today}
        />
        
       <DatePicker
        className='Date'
        placeholderText='Future Date Only'
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={tomorrow} // Set the minimum date to one day ahead
      />
    </>
  );
};

export default DateComponent;
