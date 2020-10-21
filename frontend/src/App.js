import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdScreen from "./screens/AdScreen";
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import Zoom from "react-reveal/Zoom";
import RegisterScreen from "./screens/RegisterScreen";
import AdsScreen from "./screens/AdsScreen";
import ProfileScreen from "./screens/ProfileScreen";


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">OLX</Link>
          </div>
          <div className="header-links">
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Kirish</Link>
            )}

            {!userInfo ? <Link to="/register">Registratsiya</Link> : ""}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/1-Xonalik">1-Xonalik</Link>
            </li>
            <li>
              <Link to="/category/2-Xonalik">2-Xonalik</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/ads" component={AdsScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/ad/:id" component={AdScreen} />
            <Route path="/category/:id" component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          All Rights reserved@. Tel: 909900290. Telegram: Usmon.uz
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
