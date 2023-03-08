import products from "../repository/sampleProducts";
import { productCardFetchResponse } from "../utils/productResponse";

class ProductService {
    productService() {}
    
    fetchProductCards(filter: string): productCardFetchResponse[] {
        return products.filter(p => p.offer === filter);
    }
}

export {ProductService}