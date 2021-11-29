import React from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../../images/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container d-flex flex-column align-items-center">
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
        <ul className="footer-list d-flex m-top-md">
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
            <Link to="/login" className="fz-14 m-right-md">
              LOGIN
            </Link>
          </li>
          <li>
            <Link to="/delivery" className="fz-14 m-right-md">
              DELIVERY
            </Link>
          </li>
          <li>
            <Link to="/shoppingCart" className="fz-14 m-right-md">
              SHOPPING CART
            </Link>
          </li>
        </ul>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
