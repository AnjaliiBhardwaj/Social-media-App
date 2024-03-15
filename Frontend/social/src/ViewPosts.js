import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ViewPosts.css";

export default function ViewPosts() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/Posts", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        });
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        setApiError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const userJSON = localStorage.getItem("jwtToken");
  const user = userJSON ? userJSON : null;

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/"); // Navigate to the home page after logout
    window.location.reload(); // Reload the page to reflect the logout status
  };

  if (apiError) {
    return <h1 className="random">Please Login First</h1>;
  }

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Posts">Posts</Link>
        {user ? (
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <div className="container1">
        {apiData.map((post) => (
          <div key={post._id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
