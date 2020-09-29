import React from "react";
import "./App.css";
import data from "./data";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="grid-container">
      <div className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="/">OLX</a>
        </div>
        <div className="header-links">
          <a href="/signin">Tizimga Kirish</a>
          <a href="/register">Ro'yhatdan o'tish</a>
          <a href="/cart">Savat</a>
        </div>
      </div>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul className="categories">
          <li>
            <a hrefto="/category/Pants">Pants</a>
          </li>

          <li>
            <a href="/category/Shirts">Shirts</a>
          </li>
        </ul>
      </aside>
      <div className="main">
        <div className="content">
          <ul className="ads">
            {data.products.map((product) => (
              <li>
                <div className="ad">
                  <img className="ad-image" src={product.image} alt="ad"></img>
                  <div className="ad-name">
                    <a href="product.html">{product.name}</a>
                  </div>
                  <div className="ad-sort">{product.sort}</div>
                  <div className="ad-price">{product.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">All Rights Reserved</div>
    </div>
  );
}

export default App;
