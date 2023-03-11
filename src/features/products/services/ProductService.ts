import products from "../repository/sampleProducts";
import { productFetchResponse } from "../utils/productResponse";

class ProductService {
    productService() {}
    
    fetchProductCards(filter?: string): productFetchResponse[] {
        if(filter){
            return products.filter(p => p.offer === filter);
        }
        return products;
    }
}

export {ProductService}