import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";
import { ReactComponent as BuildIcon } from "../icons/hotel.svg";
import { ReactComponent as RentIcon } from "../icons/house.svg";
import { ReactComponent as BuyIcon } from "../icons/buy.svg";
import { ReactComponent as CarIcon } from "../icons/car.svg";
import { ReactComponent as RentCarIcon } from "../icons/rentCar.svg";
import { ReactComponent as BuyCarIcon } from "../icons/car1.svg";
import { ReactComponent as RentCar1Icon } from "../icons/rental-car.svg";
import { ReactComponent as RentHouseIcon } from "../icons/rent.svg";
import { ReactComponent as CarKeyIcon } from "../icons/key.svg";
import { ReactComponent as HouseKeyIcon } from "../icons/house-key.svg";
import { ReactComponent as HouseIcon } from "../icons/house1.svg";
import { ReactComponent as StoreIcon } from "../icons/shopping-store.svg";
import { ReactComponent as SoilIcon } from "../icons/soil.svg";
import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<HouseKeyIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="ko'chmasmulk"
          >
            Ko'chmas mulk
          </DropdownItem>
          <DropdownItem
            leftIcon={<CarKeyIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="moshinalar"
          >
            Avtomobillar
          </DropdownItem>
          <DropdownItem className="margin-top" leftIcon={<PhoneIcon />}>
            Admin: +998909900290
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        onEnter={calcHeight}
        in={activeMenu === "ko'chmasmulk"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu-down">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Ko'chmas mulk</h2>
          </DropdownItem>
          <div className="menu-it">
            <DropdownItem
              leftIcon={<BuildIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="sellApartment"
            >
              Продажа недвижимости
            </DropdownItem>
            <DropdownItem
              leftIcon={<RentIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="rentApartment"
            >
              Аренда недвижимости
            </DropdownItem>
            <DropdownItem
              leftIcon={<BuyIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings"
            >
              Куплю недвижимость
            </DropdownItem>
            <DropdownItem
              leftIcon={<RentHouseIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings"
            >
              Сниму в аренду недвижимость
            </DropdownItem>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        onEnter={calcHeight}
        in={activeMenu === "moshinalar"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu-down">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Moshinalar</h2>
          </DropdownItem>
          <div className="menu-it">
            <DropdownItem
              leftIcon={<CarIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="sellCar"
            >
              Продажа автомобиля
            </DropdownItem>
            <DropdownItem
              leftIcon={<RentCarIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="carRent"
            >
              Аренда автомобиля
            </DropdownItem>
            <DropdownItem
              leftIcon={<BuyCarIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="buyCar"
            >
              Куплю автомобиль
            </DropdownItem>
            <DropdownItem
              leftIcon={<RentCar1Icon />}
              rightIcon={<ChevronIcon />}
              goToMenu="rentCar"
            >
              Сниму в аренду автомобиль
            </DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "sellCar"}
        onEnter={calcHeight}
        classNames="menu-third"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="moshinalar" leftIcon={<ArrowIcon />}>
            <h2>Moshina sotiladi</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Damas</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Cobalt</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Trailblazer</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>
            Admin: +998909900290
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "sellApartment"}
        onEnter={calcHeight}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="ko'chmasmulk" leftIcon={<ArrowIcon />}>
            <h2>Ko'chmas mulk sotmoq</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<BuyCarIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="kvartiralar"
          >
            Kvartiralar
          </DropdownItem>
          <DropdownItem leftIcon={<HouseIcon />}>Uchastok</DropdownItem>
          <DropdownItem leftIcon={<StoreIcon />}>
            Magazin va offislar
          </DropdownItem>
          <DropdownItem leftIcon={<SoilIcon />}>Yerlar</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        onEnter={calcHeight}
        in={activeMenu === "rentApartment"}
        timeout={500}
        classNames="menu-third"
        unmountOnExit
      >
        <DropdownItem goToMenu="ko'chmasmulk" leftIcon={<ArrowIcon />}>
          <h3>Ko'chmas mulk sotmoq</h3>
        </DropdownItem>
        <div  className="menu">
          <DropdownItem leftIcon={<HouseKeyIcon />}>Kvartiralar</DropdownItem>
          <DropdownItem leftIcon={<HouseIcon />}>Uchastok</DropdownItem>
          <DropdownItem leftIcon={<StoreIcon />}>
            Magazin va offislar
          </DropdownItem>
          <DropdownItem leftIcon={<SoilIcon />}>Yerlar</DropdownItem>
          <DropdownItem>
            {"                                               "}
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        onEnter={calcHeight}
        in={activeMenu === "kvartiralar"}
        timeout={500}
        classNames="menu-forth"
        unmountOnExit
      >
        <DropdownItem goToMenu="ko'chmasmulk" leftIcon={<ArrowIcon />}>
          <h3>Ko'chmas mulk sotmoq</h3>
        </DropdownItem>
        <div key="menu" className="menu">
          <DropdownItem leftIcon={<HouseKeyIcon />}>Kvartiralar1</DropdownItem>
          <DropdownItem leftIcon={<HouseIcon />}>Uchastok</DropdownItem>
          <DropdownItem leftIcon={<StoreIcon />}>
            Magazin va offislar
          </DropdownItem>
          <DropdownItem leftIcon={<SoilIcon />}>Yerlar</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
export { DropdownMenu, Navbar, NavItem };
