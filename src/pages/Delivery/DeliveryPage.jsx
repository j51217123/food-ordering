import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../components/Modal/Modal";
import Content from "../../components/Modal/Content";
import { fetchProductsData } from "../../utils/firebase";
import { setProductsData } from "../../redux/product/ProductSlice";
import ShoppingBag from "../../images/ShoppingBag.svg";

// action.js
// const productActions 可自定義 = {
//   update (setProductsData)可自定義 : (data) => {
//     return { type: "GET_PRODUCTS_DATA", data };
//   },
// };

//
const Index = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(
    (state) => state.product.productsData // store.product.productsData
  );
  // const [productsData, setProductsData] = useState([]);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [aaa1, setAAA1] = useState(0);

  // useEffect(() => {
  //   // getProductsData(); didmount + didupdate
  //   setAAA1(aaa1 + 1);
  //   console.log("hi");
  // });

  useEffect(() => {
    initialProductList(); //didmount > useEffect fn
    // console.log("useEffect");
  }, []);

  // {data:productsData}
  // >>action{payload:{data:productsData}}
  const initialProductList = async () => {
    const productsData = await fetchProductsData();
    console.log(productsData, "productsData");
    dispatch(setProductsData(productsData)); // 丟的是 key value 中的 value
    // dispatch({ type: "GET_PRODUCTS_DATA", data: productsData });
    // dispatch(actions.update(productsData.data));
  };

  // const getProductsData = async () => {
  //   // const productsData = await axios.get("http://localhost:3020/data");
  //   const productsData = await axios.get("http://localhost:3020/data");
  //   // const dataa = await getProductsData();
  //   dispatch(actions.update(productsData.data));
  //   // setProductsData(productsData.data);
  // };

  // const testFn = async () => {
  //   const dataa = await getProductsData();
  //   dispatch({ type: "GET_OREDERSINFO", data: dataa });
  // };

  const getCurrentProductData = (product) => {
    console.log(product);
    setSelectedProductData(product);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleAddToCart = (product) => {
    handleOpenModal();
    getCurrentProductData(product);
  };

  return (
    <div className="wrapper">
      <main>
        <div className="prods-container container d-flex align-items-center flex-column ">
          <h2 className="m-bottom-lg">Dessert</h2>
          <ul className="prods-list padding-md">
            {productsData &&
              productsData.map((product) => {
                return (
                  <li key={product.id}>
                    <div className="prod-box m-bottom-md">
                      <div className="prod-img-box">
                        <img
                          src={product.image}
                          alt={product.name}
                          title={product.name}
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
                        className="order-btn fz-12 padding-xs d-flex justify-content-center align-items-center"
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
            <Content
              onClose={handleCloseModal}
              selectedProductData={selectedProductData}
            />
          </Modal>
        </div>
      </main>
    </div>
  );
};

export default Index;
