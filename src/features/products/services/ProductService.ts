import products from "../repository/sampleProducts";
import { productFetchResponse } from "../utils/productResponse";

class ProductService {
    productService() {}
    
    fetchAllProducts(){
        return products; 
    }
    
    fetchProductByFilter(filter?: string): productFetchResponse[] {
        if(filter){
            return products.filter(p => p.offer === filter);
        }
        return products;
    }

    fetchProductById(id: number){
        return products.filter(p => p.id === id); 
    }
}

export {ProductService}