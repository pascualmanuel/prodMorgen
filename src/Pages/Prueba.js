import React, { useEffect, useState } from "react";

const GoogleSheetsApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sheets.googleapis.com/v4/spreadsheets/1G5_rWtM-BPXqFxrecgNKXKUXcqNx8vNUPepNRMgP7KM/values/Hoja1?key=AIzaSyAhRAX-lmTI8zu8hKQVP1foH7rj1Htq5Fg"
        );

        if (response.ok) {
          const result = await response.json();
          // console.log("Google Sheets API Response:", result);
          setData(result.values.slice(1));
        } else {
          console.error(
            "Failed to fetch data:",
            response.status,
            await response.text()
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>
        <a href="https://vimeo.com/920063700">
          MORGENSTEN(49)_muxed_DXV Normal Quality No Alpha
        </a>{" "}
        from <a href="https://vimeo.com/holamorgenstern">Hola Morgenstern</a> on{" "}
        <a href="https://vimeo.com">Vimeo</a>.
      </p>

      <div>
        <h1>Data from Google Sheets</h1>
        <ul>
          {data.map((row, index) => (
            <>
              <li key={index}>{row.join(", ")}</li>
            </>
          ))}
        </ul>
      </div>

      <iframe
        src="https://player.vimeo.com/video/920063700?h=9ac4e3f4cc?controls=0"
        width="640"
        height="360"
        aria-controls="false"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default GoogleSheetsApp;
