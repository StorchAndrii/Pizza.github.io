import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../../axios/baseService";

const initialState = {
  pizzas: [],
  status: "loading",
  searchParams: {
    page: 1,
    limit: 4,
    sortBy: "title",
    search: "",
    order: null,
    category: null,
  },
};
export const getPizza = createAsyncThunk(
  "pizzaSlice/getPizza",
  async (params, { getState }) => {
    const {
      pizzaSlice: {
        searchParams: { page, limit, sortBy, search, order, category },
      },
    } = getState();
    const { data } = await baseService.get("/items?", {
      params: {
        page,
        limit,
        sortBy,
        search,
        order,
        category,

        ...params,
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
    builder.addCase(getPizza.pending, (state, { meta }) => {
      state.pizzas = [];
      state.searchParams = { ...state.searchParams, ...meta.arg };
      state.status = "loading";
    });
    builder.addCase(getPizza.fulfilled, (state, { payload }) => {
      state.pizzas = payload;
      state.status = "success";
    });
    builder.addCase(getPizza.rejected, (state) => {
      state.status = "error";
      state.pizzas = [];
    });
  },
});
// Action creators are generated for each case reducer function
// export const {  } = pizzaSlice.actions;

export default pizzaSlice.reducer;
