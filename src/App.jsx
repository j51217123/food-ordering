import React from "react";
import { Routes, Route } from "react-router-dom";

import DeliveryPage from "./pages/Delivery/DeliveryPage";
import Header from "./components/Header/Header";
import ShoppingCartPage from "./pages/ShoppingCart/ShoppingCartPage";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";

import "./styles/main.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/shoppingCart" element={<ShoppingCartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
