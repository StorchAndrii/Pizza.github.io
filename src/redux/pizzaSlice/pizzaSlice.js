import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../../axios/baseService";

const initialState = {
  pizzas: [],
  isLoading: true,
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
      state.isLoading = true;
      state.searchParams = { ...state.searchParams, ...meta.arg };
    });

    builder.addCase(getPizza.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.pizzas = payload;
      state.isLoading = false;
    });
  },
});
// Action creators are generated for each case reducer function
// export const { setSearchValue } = pizzaSlice.actions;

export default pizzaSlice.reducer;
