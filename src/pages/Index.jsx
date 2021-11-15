import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Modal from "../components/Modal/Modal";

import ShoppingBag from "../images/ShoppingBag.svg";

const Index = () => {
  const [productsData, setProductsData] = useState([]);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [orderInfo, setOrderInfo] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputVal, setInputVal] = useState(0);

  useEffect(() => {
    getProductsData();
  }, []);

  const handleAddToCart = (product) => {
    handleOpenModal();
    getCurrentProductData(product);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const getProductsData = async () => {
    const productsData = await axios.get("http://localhost:3020/data");
    setProductsData(productsData.data);
  };

  const getCurrentProductData = (product) => {
    console.log(product);
    setSelectedProductData(product);
  };

  const saveOrderInfo = (selectedProductData) => {
    console.log("hoii");
    console.log(orderInfo);
    setOrderInfo({
      name: selectedProductData.name,
      sweetness: "test",
      sizes: "test",
    });
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="prods-container container d-flex align-items-center flex-column ">
          <h2 className="m-bottom-lg">Products</h2>
          <ul className="prods-list padding-md">
            {productsData &&
              productsData.map((product) => {
                return (
                  <li key={product.id}>
                    <div className="prod-box m-bottom-md">
                      <div className="prod-img-box">
                        <img
                          src={product.image}
                          alt={product.image}
                          title={product.image}
                        />
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
                        className="add-to-cart fz-12 padding-xs d-flex justify-content-center align-items-center"
                        onClick={() => {
                          handleAddToCart(product);
                        }}>
                        <img
                          className="m-right-xs"
                          src={ShoppingBag}
                          alt=""
                          width="20"
                          height="20"
                        />
                        Order Now
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
          <Modal isVisible={isOpenModal} onClose={handleCloseModal}>
            {selectedProductData && (
              <div className="selected-prod-wrapper">
                <div className="selected-prod-img-box">
                  <img
                    src={selectedProductData.image}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="selected-prod-info">
                  <h1>{selectedProductData.name}</h1>
                  <div>{selectedProductData.description}</div>
                </div>
                <ul className="selected-prod-topping-list">
                  <li>
                    <div>
                      <div>
                        <div>尺寸</div>
                        <div>必填</div>
                      </div>
                      <div>
                        <input type="radio" name="sizes" id="lg" />
                        <label htmlFor="sizes">大</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>選擇甜度</div>
                      <div>必填</div>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="sweetness"
                        id="100%-Sugar"
                        value={inputVal}
                      />
                      <label htmlFor="sweetness">正常糖</label>
                    </div>
                  </li>
                </ul>
                <div>
                  <button>-</button>
                  <div>qty</div>
                  <button>+</button>
                </div>
                <div>
                  <button onClick={(selectedProductData)=>{
                    saveOrderInfo(selectedProductData)
                  }}>send</button>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </main>
    </div>
  );
};

export default Index;
