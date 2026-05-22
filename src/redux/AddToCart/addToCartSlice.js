
import { productData } from "../../data/productData";

import { createSlice } from "@reduxjs/toolkit";

export const addToCartReducer = createSlice({
  name: "products",
  initialState: { products: productData, cart: [] },

  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id,
      );
      if (existingProduct) {
        alert("already Product Added");
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
  },
});

export const { addToCart } = addToCartReducer.actions;
export default addToCartReducer.reducer;
