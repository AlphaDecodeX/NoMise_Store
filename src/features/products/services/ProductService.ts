import axios from 'axios';
import products from '../repository/sampleProducts';
import productFetchResponse from '../utils/productResponse';

class ProductService {
  async fetchAllProducts() {
    // Make a GET request to the getAllProducts endpoint
    const response = await axios.get('http://localhost:7777/inventory/v1/products');
    return response.data;
  }

  async fetchProductsByOfferId(offerId: string) {
    // Make a GET request to the Get Products By Offer Id endpoint
    const response = await axios.get(`http://localhost:7777/inventory/v1/${offerId}`);
    return response.data;
  }

  async fetchProductsByCategory(category: string) {
    // Make a GET request to the Get Products By Category endpoint
    const response = await axios.get(`http://localhost:7777/inventory/v1/category/${category}`);
    return response.data;
  }

  async fetchProductByExternalId(externalId: string) {
    // Make a GET request to the Get Products By External Id endpoint
    const response = await axios.get(`http://localhost:7777/inventory/v1/external/${externalId}`);
    return response.data;
  }

  async fetchProductById(id: number) {
    // Make a GET request to the Get Product By Id endpoint
    const response = await axios.get(`http://localhost:7777/inventory/v1/${id}`);
    return response.data;
  }

  async fetchProductByName(name: string) {
    // Make a GET request to the Get Products By Name endpoint
    const response = await axios.get(`http://localhost:7777/inventory/v1/products?name=${name}`);
    return response.data[0];
  }

  async fetchProductByFilterType(filter: string) {
    // Make a GET request to the Get Products By Filter Type endpoint
    const response = await axios.get(`http://localhost:7777/inventory/v1/filter/${filter}`);
    return response.data;
  }
}

export { ProductService };
