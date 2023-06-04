import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  isLoading: false,
  userData: null,
};

export const centralStore = createSlice({
  name: "centralStore",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
      } else {
        product.quantity++
        state.cart.push(product);
      }
      updateLocalStorage(state.cart); // Update local storage
    },
    removeProductFromCart: (state, action) => {
    

      const product1 = action.payload;
      console.log(product1.id)
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product1.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity -= 1;
      } 
      updateLocalStorage(state.cart);

    },
  },
});

export const {
  startLoading,
  endLoading,
  addProductToCart,
  removeProductFromCart,
} = centralStore.actions;

export default centralStore.reducer;

const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
