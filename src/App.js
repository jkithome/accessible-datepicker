import React, { useState } from 'react';
import { format } from 'date-fns';
import Datepicker from "./datepicker";
import Calendar from "./calendar";

import './App.css';

const App = () => {
  const [showDatepicker, setShowDatePicker] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

  const toggleCalendar = (e) => {
    setShowDatePicker(false);
    setShowCalendar(true);
  }

  const handleSelectDate = (date) => {
    setDate(date);
    setShowDatePicker(true);
    setShowCalendar(false);
  }

  const closeCalendar = () => {
    setShowDatePicker(true);
    setShowCalendar(false);
  }
  return (
    <div className="App" role="application">
      {showDatepicker && (
        <Datepicker date={date} handleSelect={toggleCalendar}/>
      )}
      {showCalendar && (
        <Calendar date={date} handleSelectDate={handleSelectDate} closeCalendar={closeCalendar} />
      )}
    </div>
  );
}

export default App;
