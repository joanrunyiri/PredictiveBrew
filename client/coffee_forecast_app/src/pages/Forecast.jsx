import React, { useState } from "react";

const Forecast = () => {
  const [date, setDate] = useState("");
  const [forecastPrice, setForecastPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Flask API URL
  const API_URL = "https://1776-35-204-215-221.ngrok-free.app/predict";

  const handlePredict = async () => {
    if (!date) {
      alert("Please select a date first.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.error) {
        alert(`Error: ${data.error}`);
        setLoading(false);
        return;
      }

      setForecastPrice(data.predicted_price);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      alert("Failed to fetch prediction. Check console for details.");
      setLoading(false);
    }
  };

  return (
    <div className="forecast-container">
      <h1>Coffee Price Forecast</h1>
      <label>Select Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {error && <p className="error">{error}</p>}

      {forecastPrice !== null && (
        <div className="result">
          <h2>Forecasted Price</h2>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Predicted Price (Ksh/KG):</strong>{" "}
            {forecastPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Forecast;
