import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import video6932694707 from "./img/video6932694707.mp4";

function About() {
  return (
    <div>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <div className="media-container">
        <video controls>
          <source src={video6932694707} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default About;
