import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  isLoading: false,
  userData: null,
  productList: [],
  addressAndPhone:{}
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
        product.quantity++;
        state.cart.push(product);
      }
      updateLocalStorage(state.cart); // Update local storage
    },
    removeProductFromCart: (state, action) => {
      const product = action.payload;
      console.log(product.id);
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        if (state.cart[existingProductIndex].quantity <= 0) {
        }
        // Remove item if quantity is one
        if (state.cart[existingProductIndex].quantity === 1) {
          state.cart.splice(existingProductIndex, 1);
        } else {
          state.cart[existingProductIndex].quantity -= 1;
        }
      }
      updateLocalStorage(state.cart);
    },
    

    allProducts: (state, action) => {
      const products = action.payload;
      state.productList = products;
    },
    setAddressAndPhone:(state,action)=>{
      const addressAndPhone = action.payload;
      state.addressAndPhone = addressAndPhone;
    }
  },
});

export const {
  startLoading,
  endLoading,
  addProductToCart,
  removeProductFromCart,
  removeProductFromCartCompletely,
  allProducts,
} = centralStore.actions;

export default centralStore.reducer;

const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
