import {
  GET_PRODUCTS,
  SORT_PRODUCTS_BY_PRICE,
  SORT_STATUS
} from "../actions/types.js";
const initialState = {
  products: [],
  sort: "",
  isLowestToHighest: true
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
    default:
      return state;
  }
}
