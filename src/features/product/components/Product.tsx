import React, { useEffect, useState } from "react";
import RatingStars from "../../ratings/components/RatingStars";
import {RatingService} from "../../ratings/services/RatingService";



const Product: React.FC = ()=>{
    const ratingService: RatingService = new RatingService();
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2">
                <div className="w-3/6 h-3/6	">
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Y5k2JdsTL._SL1500_.jpg"/>
                </div>
                <RatingStars value={4} onChange={ratingService.ratingsChange}/>
            </div>
            <div className="h-2">
                Continer 2
            </div>
        </div>
    )
}

export default Product;