import { ProductService } from "../../products/services/ProductService";
import { productFetchResponse } from "../../products/utils/productResponse";

class SearchService {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  autoCompleteAndSuggest(inputValue: string): productFetchResponse[] {
    const products: productFetchResponse[] = this.productService.fetchProductCards();
    const result = products.filter((p) => p.name.toLowerCase().startsWith(inputValue.toLowerCase()));
    return result;
  }
}

export default SearchService;
