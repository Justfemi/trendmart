import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Checkout from "./pages/Checkout";
import Check from "./pages/Check";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useState } from "react";

function App() {
  // const [cart, setCart] = useState([]);

  // const handleAddToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find(item => item.id === product.id);
  //     if (existingProduct) {
  //       return prevCart.map(item =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  // const handleRemoveFromCart = (productId) => {
  //   setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  // };

  // const handleIncrementQuantity = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart.map(item =>
  //       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // const handleDecrementQuantity = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart.map(item =>
  //       item.id === productId
  //         ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
  //         : item
  //     )
  //   );
  // };
  
  // const getTotalAmount = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ProductList />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favorite />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/check" element={<Check />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
