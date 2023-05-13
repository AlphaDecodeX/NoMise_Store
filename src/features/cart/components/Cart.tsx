import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productFetchResponse } from "../../products/utils/productResponse";
import addedProducts from "../repository/addedProducts";

const Cart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemsFromRedux = useSelector((state: any) => state.cart.cartItems);
  const [cartItems, setCartItems] = useState<productFetchResponse[]>([]);
  
  useEffect(() => {
    setCartItems(Array.from(cartItemsFromRedux));
  }, [cartItemsFromRedux]);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleIncreaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 z-50">
      <button
        onClick={toggleCart}
        className="bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        Open Cart
      </button>
      {isCartOpen && (
        <div className="absolute bottom-10 right-0 w-64 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          <ul>
            {cartItems.map((product) => (
              <li
                key={product.id}
                className="mb-4 flex items-center space-x-4"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{product.name}</span>
                <div className="flex items-center space-x-2 ml-auto">
                  <button
                    onClick={() => handleDecreaseQuantity(product.id)}
                    className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleCart}
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full"
          >
            Close Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
