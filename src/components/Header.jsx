import React from "react";

import LogoIcon from "../images/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar padding-xl d-flex align-items-center justify-content-between">
        <div>
          <a href="/" className="d-flex align-items-center">
            <img
              src={LogoIcon}
              alt="Территория вкуса"
              title="Территория вкуса "
              className="d-block m-right-md"
            />
            <h2 className="fz-bold-24">Территория вкуса</h2>
          </a>
        </div>
        <ul className="d-flex">
          <li>
            <a href="/" className="fz-14 m-right-md ">
              HOME
            </a>
          </li>
          <li>
            <a href="/" className="fz-14 m-right-md">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="/" className="fz-14 m-right-md">
              DELIVERY
            </a>
          </li>
          <li>
            <a href="/" className="fz-14 m-right-md">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
