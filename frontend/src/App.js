import React from "react";
import "./App.css";

function App() {
  return (
    <div className="grid-container">
      <div className="header">
        <a className="title" href="/">
          OLX
        </a>
        <div className="header-links">
          <a href="/signin">Tizimga Kirish</a>
          <a href="/register">Ro'yhatdan o'tish</a>
          <a href="/cart">Savat</a>
        </div>
      </div>

      <div className="main">
        <div className="content">
          <ul className="ads">
            <li>
              <div className="ad">
                <img className="ad-image" src="images/d1.jpg" alt="ad"></img>
                <div className="ad-name">
                  <a href="product.html">1 Xonali Novostroyka</a>
                </div>
                <div className="ad-sort">1 Xonalik</div>
                <div className="ad-price">8 500 000 so'm</div>
              </div>
            </li>
            <li>
              <div className="ad">
                <img className="ad-image" src="images/d1.jpg" alt="ad"></img>
                <div className="ad-name">
                  <a href="product.html">1 Xonali Novostroyka</a>
                </div>
                <div className="ad-sort">1 Xonalik</div>
                <div className="ad-price">8 500 000 so'm</div>
              </div>
            </li>
            <li>
              <div className="ad">
                <img className="ad-image" src="images/d1.jpg" alt="ad"></img>
                <div className="ad-name">
                  <a href="product.html">1 Xonali Novostroyka</a>
                </div>
                <div className="ad-sort">1 Xonalik</div>
                <div className="ad-price">8 500 000 so'm</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">All Rights Reserved</div>
    </div>
  );
}

export default App;
