import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Ads from "./components/Ads";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">OLX</Link>
          </div>
          <div className="header-links">
            <Link to="/signin">Tizimga Kirish</Link>
            <Link to="/register">Ro'yhatdan o'tish</Link>
            <Link to="/cart">Savat</Link>
          </div>
        </div>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
        <div className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </div>
        <div className="footer">All Rights Reserved</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
