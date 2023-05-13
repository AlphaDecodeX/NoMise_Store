import { useDispatch } from "react-redux";
import { productFetchResponse } from "../../products/utils/productResponse";
import addedProducts from "../repository/addedProducts";

class CartService{
  
  private dispatch = useDispatch();
  cartService(){}    
   
  addProductToCart(product: productFetchResponse){
     this.dispatch({
      type: "ADD_TO_CART",
      payload: product
     });
  } 
    removeProductFromCart(product: productFetchResponse) {
      this.dispatch({
        type: "REMOVE_PRODUCT_FROM_CART",
        payload: product
       }); 
    }
}

export {CartService};