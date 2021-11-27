import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setOrderList } from "../../redux/product/ProductSlice";

const Content = ({ selectedProductData, onClose }) => {
  let currentOrderInfo = {};
  const dispatch = useDispatch();
  const orderListData = useSelector((state) => state.product.orderList);
  const [sweetness, setSweetness] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // const [ordersInfo, setOrdersInfo] = useState([]);

  const handleCloseModal = () => {
    onClose && onClose();
  };

  const handleSelectedSweetness = (e) => {
    setSweetness(e.target.value);
  };

  const handleSelectedSize = (e) => {
    setSize(e.target.value);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const saveCurrentOrderInfo = ({ productInfo }) => {
    return (currentOrderInfo = {
      name: productInfo.name,
      id: productInfo.id,
      image: `${productInfo.image}`,
      price: productInfo.price,
      size: size,
      sweetness: sweetness,
      quantity: quantity,
    });
  };

  const saveOrderInfoToStore = () => {
    dispatch(setOrderList(currentOrderInfo)); // 丟的是 key value 中的 value

    // let newOrdersInfo = [...ordersInfo, currentOrderInfo];
    // setOrdersInfo(newOrdersInfo);
    // localStorage.setItem("orderInfo", JSON.stringify(newOrdersInfo));
  };

  return (
    <div className="selected-prod-wrapper">
      <div className="selected-prod-img-box">
        <img
          src={selectedProductData.image}
          alt={selectedProductData.name}
          title={selectedProductData.name}
          height="300px"
        />
      </div>
      <div className="selected-prod-info">
        <h1 className="fz-24 m-bottom-sm">{selectedProductData.name}</h1>
        <p className="fz-15">{selectedProductData.description}</p>
      </div>
      <ul className="selected-prod-topping-list">
        <li>
          <div>
            <div className="topping-title">
              <h1 className="fz-18">尺寸選擇</h1>
              <span className="fz-14">必填</span>
            </div>
            <div className="topping-field">
              <div className="topping-label-box">
                <label className="d-flex align-items-center">
                  <input
                    type="radio"
                    name="sizes"
                    value="lg"
                    className="m-right-xs"
                    onChange={handleSelectedSize}
                  />
                  <span>大</span>
                </label>
              </div>
              <div className="topping-label-box">
                <label className="d-flex align-items-center">
                  <input
                    type="radio"
                    name="sizes"
                    value="md"
                    className="m-right-xs"
                    onChange={handleSelectedSize}
                  />
                  中
                </label>
              </div>
              <div className="topping-label-box">
                <label className="d-flex align-items-center">
                  <input
                    type="radio"
                    name="sizes"
                    value="sm"
                    className="m-right-xs"
                    onChange={handleSelectedSize}
                  />
                  小
                </label>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="topping-title">
            <h1 className="fz-18">甜度選擇</h1>
            <span className="fz-14">必填</span>
          </div>
          <div className="topping-field">
            <div className="topping-label-box">
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  name="sweetness"
                  value="100%-Sugar"
                  className="m-right-xs"
                  onChange={handleSelectedSweetness}
                />
                正常糖
              </label>
            </div>
            <div className="topping-label-box">
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  name="sweetness"
                  value="50%-Sugar"
                  className="m-right-xs"
                  onChange={handleSelectedSweetness}
                />
                半糖
              </label>
            </div>
            <div className="topping-label-box">
              <label className="d-flex align-items-center">
                <input
                  type="radio"
                  name="sweetness"
                  value="30%-Sugar"
                  className="m-right-xs"
                  onChange={handleSelectedSweetness}
                />
                微糖 - 30%
              </label>
            </div>
          </div>
        </li>
      </ul>
      <div className="d-flex justify-content-between align-items-center">
        <div className="qty-calc-btns d-flex">
          <button
            className="btn"
            onClick={handleDecrement}
            disabled={quantity === 1 ? true : false}>
            -
          </button>
          <div className="qty-text">{quantity}</div>
          <button className="btn" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="d-flex flex-grow-1">
          <button
            className="add-to-cart fz-bold-18"
            disabled={sweetness && size ? false : true}
            style={{
              backgroundColor: sweetness && size ? "#25252D" : "unset",
              color: sweetness && size ? "white" : "null",
            }}
            onClick={() => {
              let productInfo = {
                name: selectedProductData.name,
                id: selectedProductData.id,
                image: selectedProductData.image,
                price: selectedProductData.price,
              };
              saveCurrentOrderInfo({ productInfo });
              saveOrderInfoToStore();
              handleCloseModal();
            }}>
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
