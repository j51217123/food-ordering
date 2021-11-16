import React from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../images/Logo.svg";

const Header = () => {
  return (
    <header className="wrapper">
      <nav className="navbar padding-xl d-flex align-items-center justify-content-between">
        <div>
          <Link to="/" className="d-flex align-items-center">
            <img
              src={LogoIcon}
              alt="Территория вкуса"
              title="Территория вкуса "
              className="d-block m-right-md"
            />
            <h2 className="fz-bold-24">Территория вкуса</h2>
          </Link>
        </div>
        <ul className="d-flex">
          <li>
            <Link to="/" className="fz-14 m-right-md ">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="fz-14 m-right-md">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/" className="fz-14 m-right-md">
              DELIVERY
            </Link>
          </li>
          <li>
            <Link to="/" className="fz-14 m-right-md">
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/shoppingCart" className="fz-14 m-right-md">
              SHOPPING CART
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
