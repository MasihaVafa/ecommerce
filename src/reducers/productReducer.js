import {
  GET_PRODUCTS,
  SORT_PRODUCTS_BY_PRICE,
  SORT_STATUS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  FILTER_BY_PRICE,
  FILTER_BY_SIZE,
} from "../actions/types.js";
const initialState = {
  products: [],
  initProducts: [],
  sort: "",
  isLowestToHighest: true,
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        initProducts: action.payload,
      };

    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case SORT_STATUS:
      return {
        ...state,
        isLowestToHighest: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      };
    case FILTER_BY_PRICE:
      console.log("the payload is : " + action.payload);

      return {
        ...state,
        products: state.initProducts.filter(
          (product) =>
            action.payload[0] <= product.price &&
            product.price <= action.payload[1]
        ),
      };
    case FILTER_BY_SIZE:
      console.log("action.paload is : " + action.payload);

      return {
        ...state,
        products: state.initProducts.filter((product) =>
          product.availableSizes.includes(action.payload)
        ),
      };

    default:
      return state;
  }
}
