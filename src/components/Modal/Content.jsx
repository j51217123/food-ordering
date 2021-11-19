import React, { useState } from "react";

const Content = ({ selectedProductData, onClose }) => {
  let currentOrderInfo = {};
  const [sweetness, setSweetness] = useState(0);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // const [ordersInfo, setOrdersInfo] = useState([]);

  const handleCloseModal = () => {
    onClose && onClose();
  };

  const handleSelectedSweetness = (e) => {
    setSweetness(e.target.id);
  };

  const handleSelectedSize = (e) => {
    setSize(e.target.id);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const saveCurrentOrderInfo = (selectedProductName) => {
    currentOrderInfo = {
      name: selectedProductName,
      sweetness: sweetness,
      size: size,
    };
  };

  const sentOrderInfoToLocalStorage = () => {
    // let newOrdersInfo = [...ordersInfo, currentOrderInfo];
    // setOrdersInfo(newOrdersInfo);
    // localStorage.setItem("orderInfo", JSON.stringify(newOrdersInfo));
  };

  return (
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
              <input
                type="radio"
                name="sizes"
                id="lg"
                onClick={handleSelectedSize}
              />
              <label htmlFor="sizes">大</label>
              <input
                type="radio"
                name="sizes"
                id="md"
                onClick={handleSelectedSize}
              />
              <label htmlFor="sizes">中</label>
              <input
                type="radio"
                name="sizes"
                id="sm"
                onClick={handleSelectedSize}
              />
              <label htmlFor="sizes">小</label>
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
              onClick={handleSelectedSweetness}
            />
            <label htmlFor="sweetness">正常糖</label>
            <input
              type="radio"
              name="sweetness"
              id="50%-Sugar"
              onClick={handleSelectedSweetness}
            />
            <label htmlFor="sweetness">半糖</label>
          </div>
        </li>
      </ul>
      <div>
        <button
          onClick={handleDecrement}
          disabled={quantity === 1 ? true : false}>
          -
        </button>
        <div>{quantity}</div>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <button
          onClick={() => {
            let selectedProductName = selectedProductData.name;
            saveCurrentOrderInfo(selectedProductName);
            sentOrderInfoToLocalStorage();
            handleCloseModal();
          }}>
          send
        </button>
      </div>
    </div>
  );
};

export default Content;
