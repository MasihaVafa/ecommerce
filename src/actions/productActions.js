import { GET_PRODUCTS, SORT_PRODUCTS_BY_PRICE, SORT_STATUS } from "./types";

export const getProducts = () => async dispatch => {
  const res = await fetch("http://localhost:8000/products");
  const data = await res.json();
  // data.sort((a, b) => (a.price > b.price ? -1 : b.price > a.price ? 1 : 0));
  dispatch({
    type: GET_PRODUCTS,
    payload: data
  });
};
export const sortStatus = status => async dispatch => {
  dispatch({
    type: SORT_STATUS,
    payload: status
  });
};

export const sortProducts = (products, isAsc) => dispatch => {
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
    payload: products
  });
};
// export const sortPruducts = (products, togglePriceSorting) => dispatch => {
//   let sortedProducts;
//   if (togglePriceSorting) {
//     sortedProducts = products.sort((a, b) => a.price > b.price);
//   } else {
//     sortedProducts = products.sort((a, b) => a.price < b.price);
//   }
//   dispatch({
//     type: SORT_PRODUCTS_BY_PRICE,
//     payload: {
//       sortedProducts: sortedProducts,
//       togglePriceSorting: !togglePriceSorting
//     }
//   });
// };
// export const sortPruducts = () => dispatch => {
//   this.setState(state => {
//     if (state.sort !== "") {
//       state.products.sort((a, b) =>
//         state.sort === "lowestprice"
//           ? a.price > b.price
//             ? 1
//             : -1
//           : a.price < b.price
//           ? 1
//           : -1
//       );
//     } else {
//       state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
//     }
//     return { filteredProducts: state.products };
//   });
//   dispatch({
//     type: SORT_PRODUCTS_BY_PRICE ,
//     payload : {
//       sortedProducts : sortedProducts ,
//       sort : sortstatus
//     }
//   })
// };
