// import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Header />
      <p>Cart Page</p>
      <Link to="/checkout">Go to checkout</Link>
      <Footer />
    </>
  )
}

export default Cart