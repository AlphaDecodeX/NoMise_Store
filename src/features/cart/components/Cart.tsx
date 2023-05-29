import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import productFetchResponse from "../../products/utils/productResponse";
import { CartService } from "../services/cartService";
import "./Cart.css";
import { ProductService } from "../../products/services/ProductService";
import { useLocation } from "react-router-dom";

const Cart: React.FC = () => {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemsFromRedux = useSelector((state: any) => state.cart.cartItems);
  const [cartItems, setCartItems] = useState<productFetchResponse[]>([]);
  const cartService: CartService = new CartService();
  useEffect(() => {
    setCartItems(Array.from(cartItemsFromRedux));
  }, [isCartOpen, cartItemsFromRedux]);

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
    cartItems.forEach((item) => {
      if (item.quantity == 1) {
        cartService.removeProductFromCart(item);
        return;
      }
    });

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
      <div className="m-2">
        {cartItems.length > 0 ? (
          <span className="medium-shadow  bg-gray-800 text-white p-2 rounded-full">
            {cartItems.length}
          </span>
        ) : null}
      </div>

      <button
        onClick={toggleCart}
        className="medium-shadow bg-gray-800 text-white px-2 py-2 rounded-full"
      >
        <img
          className="cart-image"
          src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png"
          alt="Cart"
        />
      </button>

      {isCartOpen && (
        <div className="absolute bottom-10 right-0 w-80 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id} className="mb-4 flex items-center space-x-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>
                  {product.name.length > 20
                    ? product.name.substring(0, 20) + "..."
                    : product.name}
                </span>
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
