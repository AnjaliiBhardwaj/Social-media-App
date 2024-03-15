import React from "react";
import ReactDOM from "react-dom/client";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Posts from "./Posts";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Counter from "./Counter";
import ViewPosts from "./ViewPosts";
import Registeration from "./Registeration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
  {
    path: "/Posts/:postId",
    element: <Posts></Posts>,
  },
  {
    path: "/Posts",
    element: <ViewPosts></ViewPosts>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/Posts",
    element: <Posts></Posts>,
  },
  {
    path: "/Counter",
    element: <Counter></Counter>,
  },
  {
    path: "/register",
    element: <Registeration></Registeration>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
