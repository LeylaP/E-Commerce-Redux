import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProducts: {},
  loading: false,
};

// API mizin BASE_URL ini degişkene atadık
const BASE_URL = "https://fakestoreapi.com";

// AsyncThumk kullanarak API ye axios la istek attık ve geriye gelen veriyi dönsün istedik -------
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});
// ---------------------------------------------------------------------------------------------

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // <-- Bu reducer içi API isteklerini yönetirken createAsyncThunk ile birlikte kullanilir

    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
