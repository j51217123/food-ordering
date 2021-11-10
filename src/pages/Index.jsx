import React, { useEffect, useState } from "react";
import axios from "axios";

import LogoIcon from "../images/Logo.svg";
import ShoppingBag from "../images/ShoppingBag.svg";

const Index = () => {
  const [productsData, setProductsData] = useState([]);

  const handleAddToCart = () => {
    alert("alert");
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const productsData = await axios.get("http://localhost:3020/data");
    setProductsData(productsData.data);
  };

  return (
    <div className="wrapper">
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
      <main>
        <div className="prods-container container d-flex align-items-center flex-column ">
          <h2 className="m-bottom-lg">Products</h2>
          <ul className="prods-list padding-md">
            {productsData &&
              productsData.map((product) => {
                console.log(product);
                return (
                  <li>
                    <div className="prod-box m-bottom-md">
                      <div className="prod-img-box">
                        <a href="/">
                          <img src={product.image} alt="" />
                        </a>
                      </div>
                      <div className="prod-info padding-lg">
                        <h3 className="prod-title m-bottom-sm">
                          {product.name}
                        </h3>
                        <p className="prod-des fz-14 m-bottom-xs">
                          {product.description}
                        </p>
                        <div className="prod-price fz-bold d-flex justify-content-end">
                          $ {product.price}
                        </div>
                      </div>
                      <button
                        className="add-to-cart padding-xs d-flex justify-content-center align-items-center"
                        onClick={handleAddToCart}>
                        <img
                          className="m-right-xs"
                          src={ShoppingBag}
                          alt=""
                          width="20"
                          height="20"
                        />
                        <a href="" className="fz-12">
                          ADD TO CART
                        </a>
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Index;
