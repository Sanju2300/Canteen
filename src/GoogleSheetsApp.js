import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";

const GoogleSheetsApp = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Replace these with your Google Sheets ID and the range you want to access
  const spreadsheetId = "YOUR_GOOGLE_SHEET_ID"; // Example: 1Xk1g...Gi0LQ
  const range = "Sheet1!A1:C10"; // Example: 'Sheet1!A1:C10'

  useEffect(() => {
    // Load the Google API client
    const loadGAPI = () => {
      gapi.load("client:auth2", initClient);
    };

    // Initialize the API client
    const initClient = () => {
      gapi.client.init({
        apiKey: "YOUR_GOOGLE_API_KEY", // Replace with your API key
        clientId: "YOUR_OAUTH_CLIENT_ID", // Replace with your OAuth client ID
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ],
        scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
      })
        .then(() => {
          console.log("Google API client initialized");
          setIsLoaded(true);
        })
        .catch((error) => {
          setError("Failed to load Google API client: " + error.message);
        });
    };

    // Call loadGAPI to initialize the API client when the component mounts
    loadGAPI();
  }, []);

  // Fetch data from Google Sheets API
  const fetchDataFromGoogleSheets = async () => {
    if (!isLoaded) return;

    try {
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      // Assuming the first row contains headers, use response.result.values to access the rows
      setData(response.result.values);
    } catch (err) {
      setError("Error fetching data: " + err.message);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      fetchDataFromGoogleSheets();
    }
  }, [isLoaded]);

  return (
    <div>
      <h1>Google Sheets Data</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data.length === 0 && !error ? (
        <p>Loading data...</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              {data[0]?.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, idx) => (
                  <td key={idx}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GoogleSheetsApp;
