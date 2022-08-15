import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

export function FetchApi({ apiKey }) {
  const initialState = {};
  const [state, setState] = useState(initialState);
  const [dateValue, setDateValue] = useState("");
  let dateElement = document.querySelector(".datePicker");
  console.log("dateValue:", dateValue);

  const handleChange = (event) => {
    console.log("Date:", dateValue);
    setDateValue(event.target.value);
  };

  useEffect(() => {
    if (dateValue === undefined || dateValue === null || dateValue === "") {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setState(result);
        })
        .catch((error) =>
          console.log("Failed to make request to Nasa API:", error)
        );
      console.log("Did not find date, using todays date ");
    } else {
      console.log(`Date value found:${dateValue}`);
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateValue}`
      )
        .then((res) => res.json())
        .then((result) => {
          setState(result);
        })
        .catch((error) =>
          console.log("Failed to make request to Nasa API:", error)
        );
    }
  }, [apiKey, dateElement, dateValue]);

  return (
    <div className="nasaDiv">
      <div className="imageInfo">
        <input
          value
          type="date"
          className="datePicker"
          onChange={handleChange}
          max={"2022-08-09"}
        ></input>
        <h1 className="title">{state.title}</h1>
        <h3 className="date"> {state.date}</h3>
        <img src={state.url} className="nasaImage" alt="img"></img>
        <h3 className="credit">
          {state.copyright !== undefined ? `Copyright:${state.copyright}` : ""}
        </h3>
        <p className="nasaExplanation"> {state.explanation}</p>
      </div>
    </div>
  );
}
