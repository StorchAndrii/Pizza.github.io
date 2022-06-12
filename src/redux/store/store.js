import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "../pizzaSlice/pizzaSlice";

export const store = configureStore({
  reducer: {
    pizzaSlice,
  },
});
