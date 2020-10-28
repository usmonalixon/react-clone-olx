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

function App() {
  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  const toggleMenu = () => {
    document.querySelector("nav").classList.toggle("active");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="container">
            <nav>
              <div className="menu-icons">
                <i onClick={toggleMenu} className="icon ion-md-menu"></i>
                <i onClick={toggleMenu} className="icon ion-md-close "></i>
              </div>
              <a href="/" className="logo">
                <i className="icon">OLX</i>
              </a>
              <ul className="nav-list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">
                    Menu <i className="icon ion-md-arrow-dropdown"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        Ko'chmas mulk{" "}
                        <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            Sotiladi{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">Hovli</a>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Arenda{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">Hovli</a>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Sotib olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">Hovli</a>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Arendaga olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">
                                Hovli{"  "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="#">1-qavatlik</a>
                                </li>
                                <li>
                                  <a href="#">2-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="#">3-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="#">4-qavatlik</a>
                                </li>{" "}
                              </ul>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Avtomobil <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Food</a>
                        </li>
                        <li>
                          <a href="#">Food</a>
                        </li>
                        <li>
                          <a href="#">
                            More...{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Food</a>
                            </li>
                            <li>
                              <a href="#">Food</a>
                            </li>
                            <li>
                              <a href="#">Food</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Dinner</a>
                    </li>
                    <li>
                      <a href="#">
                        Kategoriya{" "}
                        <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Ko'chmas mulk</a>
                        </li>
                        <li>
                          <a href="#">Moshinalar</a>
                        </li>
                        <li>
                          <a href="#">Profil</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Gazeta va {"                 "} jurnallar{"   "}
                    <i className="icon ion-md-arrow-dropdown"></i>
                  </a>

                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        Xalq so'zi{" "}
                        <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            Sotiladi{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">Hovli</a>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Arenda{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">Hovli</a>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Sotib olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">Hovli</a>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Arendaga olaman{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Kvartira</a>
                            </li>
                            <li>
                              <a href="#">
                                Hovli{"  "}
                                <i className="icon ion-md-arrow-dropdown"></i>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="#">1-qavatlik</a>
                                </li>
                                <li>
                                  <a href="#">2-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="#">3-qavatlik</a>
                                </li>{" "}
                                <li>
                                  <a href="#">4-qavatlik</a>
                                </li>{" "}
                              </ul>
                            </li>{" "}
                            <li>
                              <a href="#">Magazin va ofislar</a>
                            </li>{" "}
                            <li>
                              <a href="#">Yer</a>
                            </li>{" "}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Darakchi <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Food</a>
                        </li>
                        <li>
                          <a href="#">Food</a>
                        </li>
                        <li>
                          <a href="#">
                            More...{" "}
                            <i className="icon ion-md-arrow-dropdown"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">Food</a>
                            </li>
                            <li>
                              <a href="#">Food</a>
                            </li>
                            <li>
                              <a href="#">Food</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Inson huquqlari{" "}
                        <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">1-Oylik</a>
                        </li>
                        <li>
                          <a href="#">6-Oylik</a>
                        </li>
                        <li>
                          <a href="#">1-Yillik</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        O'zbekiston ovozi{" "}
                        <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Ko'chmas mulk</a>
                        </li>
                        <li>
                          <a href="#">Moshinalar</a>
                        </li>
                        <li>
                          <a href="#">Profil</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Our chefs</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li className="move-right btn">
                  <a href="#">Obuna bo'lish</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <aside className="sidebar">
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>{" "}
          <span>
            <h1 className="kategoriyalar">Kategoriyalar</h1>
          </span>
          <DropdownMenu />
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
        <script src="/main.js"></script>
      </div>
    </BrowserRouter>
  );
}

export default App;
