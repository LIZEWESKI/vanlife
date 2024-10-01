import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/"  className="home-link">
        <button className="home-button">Return to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
