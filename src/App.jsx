import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";

import "./styles/main.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
