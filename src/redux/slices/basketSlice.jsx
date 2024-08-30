import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: getBasketFromStorage(),
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);
      if (findProduct) {
        // daha önceden eklenmiştir
        const extractedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
      } else {
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
  },
});

export const {} = basketSlice.actions;

export default basketSlice.reducer;
