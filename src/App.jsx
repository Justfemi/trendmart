import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Checkout from "./pages/Checkout";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favs" element={<Favorite />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

export default App
