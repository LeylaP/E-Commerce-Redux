import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStorage(),
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
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

        // id si produc.id ye eşit olmiyanları filtreleyip değişkene atadık
        const extractedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        // seçilen ürün sepette var ise onun ekstra eklenen ürünü sepette var olan ürün miktarına ekliyoruz
        findProduct.count += action.payload.count;

        // ürünleri stat'e setliyoruz
        state.products = [...extractedProducts, findProduct];
      } else {
        // daha önceden eklenmemiştir
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
