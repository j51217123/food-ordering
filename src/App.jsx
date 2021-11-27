import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Header from "./components/Header";
import ShoppingCartPage from "./pages/ShoppingCart/ShoppingCartPage";
import LoginPage from "./pages/Login/LoginPage";

import "./styles/main.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/shoppingCart" element={<ShoppingCartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}
