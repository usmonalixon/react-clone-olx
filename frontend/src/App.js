import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdScreen from "./screens/AdScreen";
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import AdsScreen from "./screens/AdsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { DropdownMenu } from "./components/Dropdown";
import PostApartment from "./screens/PostApartment";
import PostAuto from "./screens/PostAuto";
import AutoScreen from "./screens/AutoScreen";
import $ from "jquery";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  $(function () {
    $(".btn-open").on("click", function () {
      $(".sidebar").addClass("open");
    });
    $(".sidebar-close-button").on("click", function () {
      $(".sidebar").removeClass("open");
    });
    $("#open-menu").on("click", function () {
      $("nav").addClass("active");
    });
    $("#close-menu").on("click", function () {
      $("nav").removeClass("active");
    });
  });

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="container">
            <nav>
              <div className="menu-icons">
                <i id="open-menu" className="icon ion-md-menu "></i>
                <i id="close-menu" className="icon ion-md-close "></i>
              </div>
              <div className="brand">
                <button className="btn-open">&#9776;</button>
              </div>

              <a href="/" className="logo">
                <i className="icon">OLX</i>
              </a>

              <ul className="nav-list">
                <li>
                  <a>
                    Menu <i className="icon ion-md-arrow-dropdown"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a>
                        Ko'chmas mulk{" "}
                        <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a>
                            Sotiladi{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>
                                Kvartira{" "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="/category/1-Xonalik">1-XONALIK</a>
                                </li>
                                <li>
                                  <a href="/category/2-Xonalik">2-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/3-Xonalik">3-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/4-Xonalik">4-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/5-Xonalik">5-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/6-Xonalik">6-XONALIK</a>
                                </li>{" "}
                              </ul>
                            </li>
                            <li>
                              <a>
                                Hovli{" "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a>1-qavatlik</a>
                                </li>
                                <li>
                                  <a>2-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a>3-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a>4-qavatlik</a>
                                </li>{" "}
                              </ul>
                            </li>{" "}
                            <li>
                              <a href="/category/magazinsandoffices">
                                Magazin va ofislar{" "}
                              </a>
                            </li>{" "}
                            <li>
                              <a href="/category/ground">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a>
                            Arenda{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>
                                Kvartira{" "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="/category/1-Xonalik">1-XONALIK</a>
                                </li>
                                <li>
                                  <a href="/category/2-Xonalik">2-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/3-Xonalik">3-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/4-Xonalik">4-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/5-Xonalik">5-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/6-Xonalik">6-XONALIK</a>
                                </li>{" "}
                              </ul>
                            </li>
                            <li>
                              <a>
                                Hovli{" "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="/category/1-qavatlik">1-qavatlik</a>
                                </li>
                                <li>
                                  <a href="/category/2-qavatlik">2-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/3-qavatlik">3-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/4-qavatlik">4-qavatlik</a>
                                </li>{" "}
                              </ul>
                            </li>{" "}
                            <li>
                              <a href="/category/magazinsandoffices">
                                Magazin va ofislar{" "}
                              </a>
                            </li>{" "}
                            <li>
                              <a href="/category/ground">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a>
                            Sotib olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>
                                Kvartira{" "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="/category/1-Xonalik">1-XONALIK</a>
                                </li>
                                <li>
                                  <a href="/category/2-Xonalik">2-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/3-Xonalik">3-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/4-Xonalik">4-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/5-Xonalik">5-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/6-Xonalik">6-XONALIK</a>
                                </li>{" "}
                              </ul>
                            </li>
                            <li>
                              <a>
                                Hovli {"    "}{" "}
                                <i className="icon ion-md-arrow-dropdown"></i>{" "}
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="/category/1-qavatlik">1-qavatlik</a>
                                </li>
                                <li>
                                  <a href="/category/2-qavatlik">2-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/3-qavatlik">3-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/4-qavatlik">4-qavatlik</a>
                                </li>{" "}
                              </ul>
                            </li>{" "}
                            <li>
                              <a href="/category/magazinsandoffices">
                                Magazin va ofislar{" "}
                              </a>
                            </li>{" "}
                            <li>
                              <a href="/category/ground">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a>
                            Arendaga olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>
                                Kvartira{" "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="/category/1-Xonalik">1-XONALIK</a>
                                </li>
                                <li>
                                  <a href="/category/2-Xonalik">2-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/3-Xonalik">3-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/4-Xonalik">4-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/5-Xonalik">5-XONALIK</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/6-Xonalik">6-XONALIK</a>
                                </li>{" "}
                              </ul>
                            </li>
                            <li>
                              <a>
                                Hovli{"  "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="/category/1-qavatlik">1-qavatlik</a>
                                </li>
                                <li>
                                  <a href="/category/2-qavatlik">2-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/3-qavatlik">3-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="/category/4-qavatlik">4-qavatlik</a>
                                </li>{" "}
                              </ul>
                            </li>{" "}
                            <li>
                              <a href="/category/magazinsandoffices">
                                Magazin va ofislar{" "}
                              </a>
                            </li>{" "}
                            <li>
                              <a href="/category/ground">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                        Avtomobil <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a>
                            Sotiladi{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>Yengil mashina</a>
                            </li>
                            <li>
                              <a>Yuk mashinasi</a>
                            </li>
                            <li>
                              <a>Avtobus</a>
                            </li>
                            <li>
                              <a>Moto</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            Arenda{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>Yengil mashina</a>
                            </li>
                            <li>
                              <a>Yuk mashinasi</a>
                            </li>
                            <li>
                              <a>Avtobus</a>
                            </li>
                            <li>
                              <a>Moto</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            Sotib olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>Yengil mashina</a>
                            </li>
                            <li>
                              <a>Yuk mashinasi</a>
                            </li>
                            <li>
                              <a>Avtobus</a>
                            </li>
                            <li>
                              <a>Moto</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a>
                            Arendaga olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a>Yengil mashina</a>
                            </li>
                            <li>
                              <a>Yuk mashinasi</a>
                            </li>
                            <li>
                              <a>Avtobus</a>
                            </li>
                            <li>
                              <a>Moto</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a>Contact</a>
                </li>
                <li>
                  {userInfo ? (
                    <Link to="/profile">
                      {" "}
                      {"           "}
                      <i className="fas fa-user"></i> {"  "}Profil
                    </Link>
                  ) : (
                    <li className="move-right btn">
                      <Link to="/signin">Kirish</Link>
                    </li>
                  )}
                </li>
                <li className="move-right btn">
                  <Link to="/ads">E'lon berish</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <aside className="sidebar">
          <button className="sidebar-close-button">X</button>{" "}
          <span>
            <h1 className="kategoriyalar">Kategoriyalar</h1>
          </span>
          <DropdownMenu />
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/ads/nedvizhimost" component={PostApartment} />
            <Route path="/ads/auto" component={PostAuto} />
            <Route path="/ads" component={AdsScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/ad/:id" component={AdScreen} />
            <Route path="/auto/:id" component={AutoScreen} />
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
