import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../axios/baseService";

const initialState = {
  pizzas: [],
  isLoading: true,
  sortBy: "",
  order: "",
  category: "",
};

export const getPizza = createAsyncThunk(
  "pizzaSlice/getPizza",
  async (category) => {
    console.log(category);
    const { data } = await baseService.get("/items", {
      params: {
        sortBy: "",
        order: "",
        category: category,
      },
    });

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
      state.isLoading = false;
      state.category = "";
    });
  },
});
// Action creators are generated for each case reducer function
// export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
