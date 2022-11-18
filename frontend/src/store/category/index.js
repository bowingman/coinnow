import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doGetCategories, doGetCategory } from "./apis";

const initialState = {
  categories: [],
  category: null,
  status: "idle",
};

export const getCategoriesAsync = createAsyncThunk("get_categories", () => {
  return doGetCategories().then((response) => response.data);
});

export const getCategoryAsync = createAsyncThunk("get_category", () => {
  return doGetCategory().then((response) => response.data);
});

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
      .addCase(getCategoriesAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        status.category = action.payload;
      })
      .addCase(getCategoryAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCategories = (state) => state.categories.categories;
export const selectCategory = (state) => state.categories.category;

export default categorySlice.reducer;
