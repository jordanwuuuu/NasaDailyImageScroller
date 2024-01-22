import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GenerateImageTile } from "./App";
import { DatePicker } from "./DatePicker";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookmarkedPages, FAQPage, PageNotFound } from "./components/pages";
import { NavBar } from "./components/NavBar";
import { getFeedFormattedDate } from "./util/utilFunctions"

const root = ReactDOM.createRoot(document.getElementById("root"));
const apiKey = "hw7MfiEOLhCthoY1oTX57XvgA61SUbFUEoejOerA";

function NasaMediaObject() {
  const [dateValue, setDateValue] = useState("");
  return (
    <>
      <NavBar />
      <DatePicker setDateValue={setDateValue} />
      <GenerateImageTile apiKey={apiKey} dateValue={dateValue} />
      <GenerateImageTile apiKey={apiKey} dateValue={getFeedFormattedDate(1)} />
      <GenerateImageTile apiKey={apiKey} dateValue={getFeedFormattedDate(2)} />
      <GenerateImageTile apiKey={apiKey} dateValue={getFeedFormattedDate(3)} />
      <GenerateImageTile apiKey={apiKey} dateValue={getFeedFormattedDate(4)} />
      <GenerateImageTile apiKey={apiKey} dateValue={getFeedFormattedDate(5)} />
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
        <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
