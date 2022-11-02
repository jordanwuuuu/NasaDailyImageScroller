import React from "react";
import "./index.css";

export function DatePicker({ setDateValue }) {
  const dateToday = new Date().toLocaleDateString();
  let pickedDate;
  const handleChange = (event) => {
    console.log("> Change event:", event.target.value);
    pickedDate = event.target.value;
    setDateValue(event.target.value);
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
