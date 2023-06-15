import {
  allProducts,
  startLoading,
  endLoading,
} from "../reduxStore/reducer.js";
import * as api from "../api/index.js";
import { findClosestDistributor } from "./closest_distributor.js";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.fetchAllProducts();
    dispatch(allProducts(data));
    console.log(data);
    dispatch(endLoading());
  } catch (error) {
    console.log(error.message);
  }
};
// fetch product by search 
export const fetchProductBySearch = (search) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.fetchProductBySearch(search);
    dispatch(allProducts(data));
    console.log(data);
    dispatch(endLoading());
  } catch (error) {
    console.log(error.message);
  }
};
//get 9one product
export const fetchOneProduct = (id) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.fetchOneProduct(id);

    dispatch(endLoading());
    return data;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
//  get order history
export const getOrderHistory = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getOrderHistory();
    console.log(data);
    dispatch(endLoading());
    return data;
  } catch (error) {
    console.log(error.message);

  }
}
// get distributors
export const getDistributors = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.getDistributors();
 console.log(data);
    findClosestDistributor(data);
    dispatch(endLoading());
    return data;
  } catch (error) {
    console.log(error.message);

  }
}
// add to 

export const addToCart = (cart) => async (dispatch) =>{
  try {
    const response = await api.sendCart(cart);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const addAddress = (address) =>  async (dispatch) =>{
  try {
    const response = await api.sendAddress(address);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Call the functions as needed
//login 
export const login = (body) => async (dispatch) => { 
  try {
    const response = await api.login(body);
    console.log(response);
    localStorage.setItem("authToken", JSON.stringify(response.data.key));
  } catch (error) {
    console.log(error.message);
  }
}
export const signup = (body) => async (dispatch) => { 
  try {
    const response = await api.signup(body);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}