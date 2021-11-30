import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setIncrement,
  setDecrement,
  setRemove,
} from "../../redux/product/ProductSlice";

import { ReactComponent as RemoveIcon } from "../../images/RemoveIcon.svg";

const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const orderListData = useSelector((state) => state.product.orderList);

  useEffect(() => {
    console.log("hi");
    priceCalculate();
  }, [orderListData]);

  const handleIncrement = ({ quantity, index }) => {
    dispatch(setIncrement({ quantity, index }));
  };

  const handleDecrement = ({ quantity, index }) => {
    dispatch(setDecrement({ quantity, index }));
  };

  const handleRemove = ({ index }) => {
    dispatch(setRemove({ index }));
  };

  const priceCalculate = () => {
    const sum = orderListData.reduce((a, b) => {
      let currentPrice = b.quantity * b.price;
      return a + currentPrice;
    }, 0);
    setTotalPrice(sum);
  };

  console.log(orderListData, "orderListData");
  return (
    <div className="shopping-cart-wrap wrapper">
      <div className="shopping-cart-container padding-xl">
        <h1 className="shopping-cart-title wrapper">Shopping Cart</h1>
        <div>
          <ul className="order-list m-bottom-md">
            {orderListData &&
              orderListData.map((product, index) => {
                return (
                  <li className="m-bottom-sm">
                    <div className="prod-container d-flex justify-content-between align-items-center">
                      <div className="prod-img-box m-right-md">
                        <img
                          src={product.image}
                          alt=""
                          width="160px"
                          height="100%"
                        />
                      </div>
                      <div className="prod-variations d-flex flex-column">
                        <div className="name">{product.name}</div>
                        <div className="size">{product.size}</div>
                        <div className="sweetness">{product.sweetness}</div>
                      </div>
                      <div className="prod-count-container d-flex align-items-center">
                        <button
                          onClick={() => {
                            const quantity = product.quantity;
                            handleDecrement({ quantity, index });
                          }}
                          disabled={product.quantity === 1 ? true : false}
                          className="btn margin-auto">
                          -
                        </button>
                        <div className="prod-qty padding-xs">
                          {product.quantity}
                        </div>
                        <button
                          onClick={() => {
                            const quantity = product.quantity;
                            handleIncrement({ quantity, index });
                          }}
                          className="btn margin-auto">
                          +
                        </button>
                      </div>
                      <div className="prod-price">
                        $ {product.price * product.quantity}
                      </div>
                      <button
                        onClick={() => {
                          handleRemove({ index });
                        }}
                        className="btn  btn-remove d-flex ">
                        <RemoveIcon />
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <h1 className="payment-title">
          Total : <span>{totalPrice} </span>TWD
        </h1>
        <textarea
          style={{
            display: orderListData.length === 0 ? "none" : "inline-block",
          }}
          name="memo"
          className="memo"
          id="memo"
          cols="30"
          rows="5"
          placeholder="新增給餐廳的備註"></textarea>
      </div>
    </div>
  );
};

export default ShoppingCart;
