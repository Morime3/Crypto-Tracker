import React from "react";
import "./Navbar.css";
import { LOGO_BASE_64 } from "../Logo";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={LOGO_BASE_64} alt="" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="uan">UAN</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  );
}
