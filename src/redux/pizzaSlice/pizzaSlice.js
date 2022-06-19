import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../../axios/baseService";

const initialState = {
  itemsPizza: [],
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
      state.status = "loading";
      state.itemsPizza = [];
      state.searchParams = { ...state.searchParams, ...meta.arg };
    });
    builder.addCase(getPizza.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.itemsPizza = payload;
    });
    builder.addCase(getPizza.rejected, (state) => {
      state.status = "error";
      state.itemsPizza = [];
    });
  },
});
// Action creators are generated for each case reducer function
// export const {  } = pizzaSlice.actions;

export const selectorPizzas = (state) => state.pizzaSlice;
export const selectorSearch = (state) => state.pizzaSlice.searchParams;

export default pizzaSlice.reducer;
