import { productData } from "../../data/productData";

import { createSlice } from "@reduxjs/toolkit";


export const addToCartReducer = createSlice({
  name: "products",
  initialState: productData,
  reducers: {
    addToCart: (state, action) => {
        console.log(state)
    },
  },
});

export const { addToCart } = addToCartReducer.actions;
export default addToCartReducer.reducer;
