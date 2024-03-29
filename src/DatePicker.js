import React from "react";
import "./index.css";

export function DatePicker({ setDateValue }) {
  const dateToday = new Date().toLocaleDateString();
  let pickedDate;
  const handleChange = (event) => {
    pickedDate = event.target.value;
    console.log(`Date changed to ${pickedDate}`);
    setDateValue(pickedDate); 
  };

  return (
    <div className="datePickerDiv">
      <input
        value={pickedDate}
        type="date"
        onChange={handleChange}
        max={rearrangeDateFormat(dateToday)}
        className="datePickerInput"
      />
    </div>
  );
}

function rearrangeDateFormat(date) {
  const dayToday = date.match(/\d{2}(?=\/)/g)[0];
  const monthToday = date.match(/\d{2}(?=\/)/g)[1];
  const YearToday = date.match(/(?!\/)\d{4}/g)[0];
  return `${YearToday}-${monthToday}-${dayToday}`;
}
