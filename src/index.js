import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FetchApi } from "./App";
import { DatePicker } from "./DatePicker";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookmarkedPages } from "./components/pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
const apiKey = "hw7MfiEOLhCthoY1oTX57XvgA61SUbFUEoejOerA";

function NasaMediaObject() {
  const [dateValue, setDateValue] = useState("");
  return (
    <div>
      <DatePicker setDateValue={setDateValue} />
      <FetchApi apiKey={apiKey} dateValue={dateValue} />
      <FetchApi apiKey={apiKey} dateValue="1997-12-25" />
      <FetchApi apiKey={apiKey} dateValue="1996-01-21" />
    </div>
  );
}

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<NasaMediaObject />} />
        <Route path="/saved" element={<BookmarkedPages apiKey={apiKey} />} />
      </Routes>
      {/* <NasaMediaObject /> */}
    </React.StrictMode>
  </BrowserRouter>
);
