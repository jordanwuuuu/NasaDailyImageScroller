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
    </div>
  );
}

root.render(
  <React.StrictMode>
    <NasaMediaObject />
  </React.StrictMode>
);
