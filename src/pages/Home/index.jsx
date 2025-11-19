import React from "react";
import { NavLink } from "react-router";
import "./style.css";

function Home() {
  return (
    <div className="home-container">
      <NavLink to="/users" className="home-btn">
        Users List
      </NavLink>

      <NavLink to="/posts" className="home-btn">
        Posts List
      </NavLink>
    </div>
  );
}

export default Home;
