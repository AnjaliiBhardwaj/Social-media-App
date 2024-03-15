import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate(); //to navigate at diff routes
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(null); // Store specific error messages

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      if (response.status === 200) {
        // Successful login
        localStorage.setItem("jwtToken", response.data.token);
        navigate("/Posts");
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        // Check if the response contains a specific error message for invalid credentials
        if (response.data.error === "Invalid username/password") {
          setLoginErr("Invalid username/password. Please try again.");
        } else {
          setLoginErr("An error occurred. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      setLoginErr(
        "Failed to connect to server. Please check your network connection."
      );
    } finally {
      // Reset form state
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <div className="login-container">
        <h1>Login</h1>
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
          <button type="submit">Login</button>
        </form>
        {loginErr && <p className="error-message">{loginErr}</p>}
        <p>
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")}>Register</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
