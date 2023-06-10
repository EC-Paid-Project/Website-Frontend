import {
  allProducts,
  startLoading,
  endLoading,
} from "../reduxStore/reducer.js";
import * as api from "../api/index.js";

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
