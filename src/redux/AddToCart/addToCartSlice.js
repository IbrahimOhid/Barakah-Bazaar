import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productData } from "../../data/productData";

export const addToCartReducer = createSlice({
  name: "products",
  initialState: {
    products: productData,
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id,
      );
      if (existingProduct) {
        toast.error("Product already in cart!");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("Added to cart!");
      }
    },

    incrementItem: (state, action) => {
      const item = state.cart.find((product) => product.id === action.payload);

      if (item.quantity >= 5) {
        toast.warning("Only 5 products allowed");
      } else {
        item.quantity += 1;
      }
    },

    decrementItem: (state, action) => {
      const item = state.cart.find((product) => product.id === action.payload);

      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload,
      );

      toast.info("Item removed from cart");
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeItem } =
  addToCartReducer.actions;

export default addToCartReducer.reducer;
