import { combineReducers } from "redux";
import cartReducer from "../features/cart/services/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;