import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Checkout from "./pages/Checkout";
import Check from "./pages/Check";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <CartProvider>
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
        <ToastContainer />
      </CartProvider>
    </Router>
  )
}

export default App
