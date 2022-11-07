import React from "react";
import { useState, useEffect } from "react";
import { Bookmarker } from "./components/Bookmark";

export function FetchApi({ apiKey, dateValue }) {
  const initialState = {};
  const [responseState, setResponseState] = useState(initialState);
console.log('>> Fetch called')
  useEffect(() => {
    if (dateValue === undefined || dateValue === null || dateValue === "") {
      fetch(getFetchRequestUri(apiKey))
        .then(async (res) => {
          const response = await res.json();
          setResponseState(response);
        })
        .catch((error) =>
          console.log("Failed to make request to Nasa API:", error)
        );
    } else {
      console.log(`Date value found:${dateValue}`);
      fetch(getFetchRequestUri(apiKey, dateValue))
        .then((res) => res.json())
        .then((result) => {
          setResponseState(result);
        })
        .catch((error) =>
          console.log("Failed to make request to Nasa API:", error)
        );
    }
  }, [apiKey, dateValue]);

  return (
    <div className="nasaDiv">
      <div className="imageInfo">
        <h1 className="title">{responseState.title}</h1>
        <h3 className="date"> {responseState.date}</h3>
        {responseState.url && responseState.url.includes("youtube") ? (
          <iframe
            title="youtube"
            className="nasaVideo"
            alt="img"
            width="420"
            height="315"
            src={responseState.url}
          />
        ) : (
          <img
            src={responseState.url}
            className="nasaImage"
            alt="img"
            onClick={clickImage}
          ></img>
        )}
        <Bookmarker dateValue={dateValue} />
        <h3 className="credit">
          {responseState.copyright !== undefined
            ? `Copyright:${responseState.copyright}`
            : ""}
        </h3>
        <p className="nasaExplanation"> {responseState.explanation}</p>
      </div>
    </div>
  );
}

function getFetchRequestUri(apiKey, dateValue) {
  const urlParameters = dateValue
    ? `api_key=${apiKey}&date=${dateValue}`
    : `api_key=${apiKey}`;

  return `https://api.nasa.gov/planetary/apod?${urlParameters}`;
}

function clickImage(responseState) {
  window.open(responseState.target.src, "_blank");
}
