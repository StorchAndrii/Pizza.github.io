import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../axios/baseService";

const initialState = {
  pizzas: [],
};

export const getPizza = createAsyncThunk(
  "pizzaSlice/getPizza",
  async (city) => {
    const { data } = await baseService.get("/items");
    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPizza.fulfilled, (state, { payload }) => {
      state.pizzas = payload;
    });
  },
});
// Action creators are generated for each case reducer function
// export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
