import React from "react";
import { useState, useEffect } from "react";

export function FetchApi({ apiKey, dateValue }) {
  const initialState = {};
  const [responseState, setResponseState] = useState(initialState);

  useEffect(() => {
    if (dateValue === undefined || dateValue === null || dateValue === "") {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setResponseState(result);
        })
        .catch((error) =>
          console.log("Failed to make request to Nasa API:", error)
        );
    } else {
      console.log(`Date value found:${dateValue}`);
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateValue}`
      )
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
          <img src={responseState.url} className="nasaImage" alt="img"></img>
        )}

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
