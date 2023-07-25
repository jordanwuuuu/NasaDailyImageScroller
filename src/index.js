import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GenerateImageTile } from "./App";
import { DatePicker } from "./DatePicker";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookmarkedPages, PageNotFound } from "./components/pages";
import { NavBar } from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
const apiKey = "hw7MfiEOLhCthoY1oTX57XvgA61SUbFUEoejOerA";

function NasaMediaObject() {
  const [dateValue, setDateValue] = useState("");
  return (
    <>
      <NavBar/>
      <DatePicker setDateValue={setDateValue} />
      <GenerateImageTile apiKey={apiKey} dateValue={dateValue} />
      <GenerateImageTile apiKey={apiKey} dateValue="1996-01-21" />
      <GenerateImageTile apiKey={apiKey} dateValue="1995-06-16" />
    </>
  );
}

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<NasaMediaObject />} />
        <Route path="/saved" element={<BookmarkedPages apiKey={apiKey} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
