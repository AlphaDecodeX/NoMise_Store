type productFetchResponse = {
    external_id: string,
    name: string, 
    description: string,
    price: number,
    rating: number,
    offer: string,
    numberOfRatings: number, 
    img: string,
    id: number,
    quantity: number,
    filter: string 
};

export default productFetchResponse;