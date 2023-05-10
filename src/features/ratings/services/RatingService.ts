import { ProductService } from "../../products/services/ProductService";
import {productFetchResponse} from "../../products/utils/productResponse"
import * as fs from 'fs';
// import * as jsonfile from 'jsonfile';
class RatingService{
    private productService: ProductService;
    constructor(){
        this.productService = new ProductService();
    }

    

    fetchRatings(productId: number): number{
        const products: productFetchResponse[] = this.productService.fetchAllProducts();
        const product:  productFetchResponse[] = products.filter(p => p.id==productId);
        return product[0].rating;
    }

    ratingsChange(productId: number, rating: number):void{
    //     const data = jsonFile.readFileSync('data.json');
    }
}

export {RatingService};