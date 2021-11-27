import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setIncrement,
  setDecrement,
  setRemove,
} from "../../redux/product/ProductSlice";

import { ReactComponent as RemoveIcon } from "../../images/RemoveIcon.svg";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const orderListData = useSelector((state) => state.product.orderList);

  const handleIncrement = ({ quantity, index }) => {
    dispatch(setIncrement({ quantity, index }));
  };

  const handleDecrement = ({ quantity, index }) => {
    dispatch(setDecrement({ quantity, index }));
  };

  const handleRemove = ({ index }) => {
    dispatch(setRemove({ index }));
  };

  return (
    <div className="wrapper">
      <div className="shopping-cart-container padding-xl">
        <div className="shopping-cart-left">
          <h1 className="shopping-cart-title wrapper">Shopping Cart</h1>
          <div>
            <ul className="order-list">
              {orderListData &&
                orderListData.map((product, index) => {
                  return (
                    <li>
                      <div className="prod-container d-flex align-items-center">
                        <div className="m-right-md">
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
                        <div className="d-flex align-items-center">
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
                        <div>$ {product.price * product.quantity}</div>
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
        </div>
        <div className="shopping-cart-right">
          <h1 className="payment-title wrapper">Payment</h1>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
