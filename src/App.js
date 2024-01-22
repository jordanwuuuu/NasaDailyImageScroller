import React from "react";
import { useState, useEffect } from "react";
import { Bookmarker } from "./components/Bookmark";

export function GenerateImageTile({ apiKey, dateValue }) {
  const initialState = {};
  const [responseState, setResponseState] = useState(initialState);
  useEffect(() => {
    if (dateValue === undefined || dateValue === null || dateValue === "") {
      console.log("Unable to find date picker date. Using today`s date");
      fetch(getFetchRequestUri(apiKey))
      .then(async (res) => {
        const response = await res.json();
        setResponseState(response);
      })
        .catch((error) =>
          console.log("Failed to make request to Nasa API (No date):",
            error,
          )
        );
    } else {
      console.log(`Date value found:${dateValue}`);
      fetch(getFetchRequestUri(apiKey, dateValue))
        .then((res) => res.json())
        .then((result) => {
          setResponseState(result);
          console.log(`Date ${dateValue} with response:`, {
            result,
            responseState,
          });
        })
        .catch((error) =>
          console.log(
            `Failed to make request to Nasa API for date:${dateValue}:`,
            error
          )
        );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey, dateValue]);

  return (
    <div className="nasaDiv">
      <div className="imageInfo">
        <h1 className="title">{responseState.title}</h1>
        <h3 className="date"> {responseState.date}</h3>
        {responseState.media_type === "image" ? (
          <img
            src={responseState.hdurl}
            className="nasaImage"
            alt="img"
            onClick={clickImage}
          ></img>
        ) : (
          <iframe
            title="youtube"
            className="nasaVideo"
            alt="img"
            width="420"
            height="315"
            src={responseState.url}
          />
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
  // Date Value example: "1996-01-21"
  const urlParameters = dateValue
    ? `api_key=${apiKey}&date=${dateValue}`
    : `api_key=${apiKey}`;

  return `https://api.nasa.gov/planetary/apod?${urlParameters}`;
}

function clickImage(responseState) {
  console.log(">> response o click:", {
    target: responseState.target,
    responseState,
  });
  window.open(responseState.target.src, "_blank");
}
