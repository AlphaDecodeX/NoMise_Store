import { productFetchResponse } from "../../products/utils/productResponse";
import addedProducts from "../repository/addedProducts";

class CartService{
  
  cartService(){}    
  
  addProductToCart(product: productFetchResponse){
    const isProductInCart = addedProducts.some((addedProduct) => (addedProduct.external_id === product.external_id))
    isProductInCart ? console.log(`product with id: ${product.id} already in the cart`) : addedProducts.push(product);
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