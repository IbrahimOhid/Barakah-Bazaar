import { configureStore } from "@reduxjs/toolkit";
import  addToCartReducer  from "./AddToCart/addToCartSlice";

export const store = configureStore({
    reducer: {
        products: addToCartReducer
    }
})