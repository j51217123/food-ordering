export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";
// all product [{},{},{}]
// selectedproduct {} // 優化項目 shopping cart qty 顯示
// orderlist [{},{},{}] 

const initialState = {
  productsData: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      return { ...state, productsData: action.data };
    default:
      return state;
  }
}
