import React, { useContext } from "react";
import "./Navbar.css";
import { LOGO_BASE_64 } from "../Logo";
import { CoinContext } from "../../context/CoinContext";

export default function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "uah":
        setCurrency({ name: "uah", symbol: "₴" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

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
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="uah">UAH</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  );
}
