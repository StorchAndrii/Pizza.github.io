import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "../pizzaSlice/pizzaSlice";
import cartSlice from "../cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    pizzaSlice,
    cartSlice,
  },
});
