import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../images/Logo.svg";

const Header = () => {
  const [click, setClick] = useState(true);

  const testFn = () => {
    console.log(click, "before");
    setClick((prevState) => !prevState);
    console.log(click, "after");
  };

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
        <label htmlFor="menu-control" className="menu-control">
          <span className="fz-24">☰</span>
        </label>
        <input
          type="checkbox"
          id="menu-control"
          onChange={testFn}
          checked={!click}
        />

        <ul
          // style={{ display: click ? "none" : "block" }}
          onClick={testFn}>
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
            <Link to="/login" className="fz-14 m-right-md">
              LOGIN
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
