import actionType from "../../../services/actionType";

const initialState = {
    cartItems: new Set(),
  };
  

  const cartReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: state.cartItems.add(action.payload),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  