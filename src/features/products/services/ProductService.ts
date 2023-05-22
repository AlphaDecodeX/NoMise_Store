import products from "../repository/sampleProducts";
import productFetchResponse from "../utils/productResponse";

class ProductService {
    productService() {}
    
    fetchAllProducts(){
        return products; 
    }
    
    fetchProductByFilter(filter?: string): productFetchResponse[] {
        // if(filter){
        //     return products.filter(p => p.offer === filter);
        // }
        return products;
    }

    fetchProductByExternalId(externalId: string){
        return products.filter(p => p.external_id === externalId); 
    }

    fetchProductById(id: number){
        return products.filter(p => p.id === id);
    }

    fetchProductByName(name: string): productFetchResponse{
        return products.filter(p => p.name == name)[0];
    }
}

export {ProductService}