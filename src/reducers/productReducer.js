import {
  GET_PRODUCTS,
  SORT_PRODUCTS_BY_PRICE,
  SORT_STATUS,
  ADD_TO_CART,
  DELETE_FROM_CART
} from "../actions/types.js";
const initialState = {
  products: [],
  sort: "",
  isLowestToHighest: true,
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        products: action.payload
      };
    case SORT_STATUS:
      return {
        ...state,
        isLowestToHighest: action.payload
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(cart => cart.id !== action.payload)
      };
    default:
      return state;
  }
}
