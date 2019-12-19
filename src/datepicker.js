import React from 'react';
import './App.css';

const Datepicker = ({ date, handleSelect }) => {
  const handleKeyPress = (e) => {
    const charCode = e.charCode
    if(charCode === 13 || charCode === 32) {
      handleSelect();
    }
  }

  return (
    <div
      className="datepicker"
      tabIndex="0"
      onClick={handleSelect}
      onKeyPress={handleKeyPress}
      role="button"
      aria-label="Date picker"
    >
      <div>
        Select a date
      </div>
      <div aria-label="Selected date">
        {date}
      </div>
    </div>
  );
}

export default Datepicker;
