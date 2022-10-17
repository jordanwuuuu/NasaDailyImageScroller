import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FetchApi } from "./App";
import { DatePicker } from "./DatePicker";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const apiKey = "hw7MfiEOLhCthoY1oTX57XvgA61SUbFUEoejOerA";

function NasaMediaObject() {
  const [dateValue, setDateValue] = useState("");
  return (
    <div>
      <DatePicker setDateValue={setDateValue} />
      <FetchApi apiKey={apiKey} dateValue={dateValue} />
      <FetchApi apiKey={apiKey} dateValue='1997-12-25' />
      <FetchApi apiKey={apiKey} dateValue='1996-01-21' />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <NasaMediaObject />
  </React.StrictMode>
);
