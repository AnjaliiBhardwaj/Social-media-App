import React, { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import "./Home.css"; // Import the external CSS file

function Home() {
  const [displayCounter] = useState(false);
  const userJSON = localStorage.getItem("jwtToken");
  const user = userJSON ? userJSON : null;
  const handleLogut = () => {
    // console.log("hello");
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };
  return (
    <div className="home-container">
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="Posts">Posts</Link>
        {user ? (
          <Link to="/" onClick={handleLogut}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      {displayCounter ? (
        <Counter />
      ) : (
        <div className="content-wrapper">
          {displayCounter ? (
            <Counter />
          ) : (
            <div className="home-content">
              <h1>Welcome to Your Social Media App</h1>
              <p>
                Connect with friends, share updates, and discover new content.
              </p>
            </div>
          )}
        </div>
      )}
      <footer className="footer">
        <p>&copy; 2024 Social Media | Contact us at : anjali@example.com</p>
      </footer>
    </div>
  );
}

export default Home;
