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
    const a = data.map((product) => product.cylinder);

    dispatch(allProducts(a));
    dispatch(endLoading());
  } catch (error) {
    console.log(error.message);
  }
};
// fetch product by search
export const fetchProductBySearch = (search) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const { data } = await api.fetchAllProducts(); // Fetch all products
    const a = data.map((product) => product.cylinder);
    const filteredData = a.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    ); // Filter the products based on the search query
    dispatch(allProducts(filteredData));
    console.log(filteredData);
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
    return data.cylinder;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
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
};
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
};
// add to

export const addToCart = (cart) => async (dispatch) => {
  try {
    const response = await api.sendCart(cart);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addAddress = (address) => async (dispatch) => {
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
    // console.log(response);
    localStorage.setItem("authToken", JSON.stringify(response.data.key));
    dispatch(getUser());
    return response;
  } catch (error) {
    // console.log(error);
    return error.response;
  }
};
export const signup = (body) => async (dispatch) => {
  try {
    const response = await api.signup(body);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
//sendOrder
export const sendOrder = (a, b, c, d) => async (dispatch) => {
  try {
    const response = await api.send({
      cart: b,
      address: a,
      type: d,
      dis_id: parseInt(c),
    });
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

//get user
export const getUser = () => async (dispatch) => {
  try {
    const response = await api.user();
    console.log(response);
    const user = {
      ...response.data,
      name: response.data.first_name + " " + response.data.last_name,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
//google login
export const googlelogin = (body) => async (dispatch) => {
  try {
    console.log(body);
    const response = await api.googlelogin(body);
    console.log(response);
    localStorage.setItem("authToken", JSON.stringify(response.data.key));
    dispatch(getUser());
  } catch (error) {
    console.log(error.message);
  }
};
