import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orders/orderSlice";
import productReducer from "./features/products/productSlice";
export const store = configureStore({
  reducer: {
    orders: orderReducer,
    products: productReducer,
  },
});
