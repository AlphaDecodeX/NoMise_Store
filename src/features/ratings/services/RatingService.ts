import { ProductService } from "../../products/services/ProductService";
import {productFetchResponse} from "../../products/utils/productResponse"

class RatingService{
    private productService: ProductService;
    constructor(){
        this.productService = new ProductService();
    }

    

    fetchRatings(productId: number): number{
        const products: productFetchResponse[] = this.productService.fetchProductCards();
        const product:  productFetchResponse[] = products.filter(p => p.id==productId);
        return product[0].rating;
    }

    ratingsChange(productId: number, rating: number):void{

    }
}

export {RatingService};