import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // reducers : function 資料管理的操作方法
    setProductsData: (state, { payload }) => {
      //   const { data } = action.payload;
      state.productsData = payload; // key ( state.productsData):value (action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductsData } = productSlice.actions;

export default productSlice.reducer;
