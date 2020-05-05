import {
  GET_PRODUCTS,
  SORT_PRODUCTS_BY_PRICE,
  SORT_STATUS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  FILTER_BY_PRICE,
  FILTER_BY_SIZE,
} from "./types";

export const getProducts = () => async (dispatch) => {
  const res = await fetch(
    "https://my-json-server.typicode.com/MasihaVafa/ecommerce/products"
  );
  // const res = await fetch("http://localhost:8000/products");
  const data = await res.json();
  data.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
  dispatch({
    type: GET_PRODUCTS,
    payload: data,
  });
};
export const sortStatus = (status) => async (dispatch) => {
  dispatch({
    type: SORT_STATUS,
    payload: status,
  });
};

export const sortProducts = (products, isAsc) => (dispatch) => {
  if (isAsc) {
    products.sort((a, b) =>
      a.price > b.price ? 1 : b.price > a.price ? -1 : 0
    );
  } else {
    products.sort((a, b) =>
      a.price > b.price ? -1 : b.price > a.price ? 1 : 0
    );
  }
  dispatch({
    type: SORT_PRODUCTS_BY_PRICE,
    payload: products,
  });
};
export const addToCart = (addedProduct) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: addedProduct,
  });
};
export const deleteFromCart = (id) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: id,
  });
};
export const filterByPrice = (sliderValue) => (dispatch) => {
  dispatch({
    type: FILTER_BY_PRICE,
    payload: sliderValue,
  });
};
export const filterBySize = (size) => (dispatch) => {
  dispatch({
    type: FILTER_BY_SIZE,
    payload: size,
  });
};
