// import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate  = useNavigate();

  const handleGoToCheckout = () => {
    navigate('/checkout');
  }

  return (
    <>
      <Header />
      <section className="flex items-center">
        <div className="border border-[#e0e0e0] rounded-custom-3 basis-[75%]">

        </div>
        <div className="border border-[#e0e0e0] rounded-custom-3 basis-[25%]">

        </div>
      </section>
      <Link to="/checkout">Go to checkout</Link>
      <Footer />
    </>
  )
}

export default Cart