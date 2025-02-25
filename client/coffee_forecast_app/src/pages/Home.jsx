import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Coffee Price Forecasting</h1>
      <p>Predict future coffee prices based on historical data.</p>
      <Link to="/forecast">
        <button>Get Forecast</button>
      </Link>
    </div>
  )
}

export default Home

