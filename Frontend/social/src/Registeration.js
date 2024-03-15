import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Registeration.css"; // Importing the external CSS file for styling

function Registeration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerErr, setRegisterErr] = useState(null); // Store specific error messages

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        password,
      });

      if (response.status === 201) {
        // Successful registration
        setRegisterErr("Registration successful. Please login.");
        navigate("/login"); // Redirect to login page
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        // Handle potential backend errors (e.g., username already exists)
        if (response.status === 400) {
          // Assuming a 400 status code for existing username
          setRegisterErr(
            "Username already exists. Please choose a different username."
          );
        } else {
          setRegisterErr(
            "An error occurred. Please try again later." // Generic error message
          );
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      setRegisterErr(
        "Failed to connect to server. Please check your network connection."
      );
    } finally {
      // Reset form state (optional)
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <nav className="header">
        {/* Links assuming you have these routes set up */}
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <div className="registration-container">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <button type="submit">Register</button>
        </form>
        {registerErr && <p className="error-message">{registerErr}</p>}
      </div>
    </div>
  );
}

export default Registeration;
