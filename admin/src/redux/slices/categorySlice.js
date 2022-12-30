import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "../../axios";

const getToken = () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  } else {
    return "";
  }
};

const initialState = {
  loading: false,
  categories: [],
  categoryToUpdate: {},
};

const fetchCategories = createAsyncThunk(
  "/category/fetchCategories",
  async (dispatch, { getState }) => {
    const { token } = getState().user;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get("/attractions/categories/all", config);
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.categoryToUpdate = action.payload
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
    },
  },
});

export const {
    updateCategory,
} = categorySlice.actions;

export { fetchCategories };

export default categorySlice.reducer;
