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
    removeProductFromCart(externalId: string) {
        const index = addedProducts.findIndex(
          (product) => product.external_id === externalId
        );
        if (index !== -1) {
          addedProducts.splice(index, 1);
        }
    }
}

export {CartService};