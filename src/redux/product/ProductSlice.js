import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  productsData: [],
  orderList: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // reducers : function 資料管理的操作方法
    setProductsData: (state, action) => {
      //   const { data } = action.payload;
      state.productsData = action.payload; // key ( state.productsData):value (action.payload)
    },

    setOrderList: (state, action) => {
      // fix 同物品不會更新同一筆資料
      console.log(action.payload, "action.payload");
      // orderList[0] is cake;  cake.id = 2 ; payload.id = 1
      if (
        state.orderList.length === 0 ||
        state.orderList.find((product) => product.id !== action.payload.id)
      ) {
        state.orderList.push(action.payload);
      } else if (
        state.orderList.find(
          (product) =>
            product.id === action.payload.id &&
            (product.size !== action.payload.size ||
              product.sweetness !== action.payload.sweetness)
        )
      ) {
        state.orderList.push(action.payload);
      } else {
        const existItem = state.orderList.find(
          (product) =>
            product.id === action.payload.id &&
            product.size === action.payload.size &&
            product.sweetness === action.payload.sweetness
        );
        existItem.quantity += action.payload.quantity;
      }
    },

    setIncrement: (state, action) => {
      const { index } = action.payload;
      state.orderList[index].quantity += 1;
    },

    setDecrement: (state, action) => {
      const { index } = action.payload;
      state.orderList[index].quantity -= 1;
    },

    setRemove: (state, action) => {
      const { index } = action.payload;
      state.orderList.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProductsData,
  setOrderList,
  setIncrement,
  setDecrement,
  setRemove,
} = productSlice.actions;

export default productSlice.reducer;
