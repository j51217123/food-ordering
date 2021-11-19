import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "./product/ProductSlice";

export default configureStore({
  reducer: {
    product: ProductReducer,
  }, // 所有的 reducer 集合 (combine)
});
