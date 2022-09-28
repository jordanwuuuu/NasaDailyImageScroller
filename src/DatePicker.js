import React from "react";
import "./index.css";

export function DatePicker({ setDateValue }) {
  const dateToday = new Date().toLocaleDateString();
  const formattedDate = rearrangeDateFormat(dateToday);
  let pickedDate;
  console.log("formattedDate:", formattedDate);
  const handleChange = (event) => {
    console.log("> Change event:", event.target.value);
    pickedDate = event.target.value;
    setDateValue(event.target.value);
  };

  return (
    <input
      value={pickedDate}
      type="date"
      className="datePicker"
      onChange={handleChange}
      max={formattedDate}
    />
  );
}

function rearrangeDateFormat(date) {
  const dayToday = date.match(/\d{2}(?=\/)/g)[0];
  const monthToday = date.match(/\d{2}(?=\/)/g)[1];
  const YearToday = date.match(/(?!\/)\d{4}/g)[0];
  return `${YearToday}-${monthToday}-${dayToday}`;
}
