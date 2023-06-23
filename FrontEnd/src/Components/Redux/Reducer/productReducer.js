
import * as actiontype from "../Constants/ProductConstant"
export const getProductsReducer = (state={products:[]},action) => {
    switch (action.type) {
      case actiontype.GET_PRODUCTS_SUCCESS: {
        return { products: action.payload };
      }
      case actiontype.GET_PRODUCTS_FAIL: {
        return { error: action.payload };
      }
      default:
        return state;
    }
};