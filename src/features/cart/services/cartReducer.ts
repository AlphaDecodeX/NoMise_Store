import actionType from "../../../services/actionType";
import productFetchResponse from "../../products/utils/productResponse";

const initialState = {
  cartItems: new Set(),
};

const cartReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload.quantity > 0) {
        const product: productFetchResponse = action.payload;
        product.quantity = 1;        
        return {
          ...state,
          cartItems: state.cartItems.add(product),
        };
      } else {
        throw new Error("Product cannot be added. Invalid quantity.");
      }

    case "REMOVE_PRODUCT_FROM_CART":
      const updatedCartItems = new Set(state.cartItems);
      updatedCartItems.delete(action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
