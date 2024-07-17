import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity++;
      setCart(updatedCart);
      toast.success('Item successfully added to cart!');
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.info('Item exists in cart!');
    }
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity < 10
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    toast.error('Removed from cart!');
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Cart cleared successfully!')
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};