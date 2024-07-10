// import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import wish from "../assets/wish.svg";

const Favorite = () => {
  const navigate = useNavigate();

  const navToProducts = () => {
    navigate("/");
  }

  return (
    <>
      <Header />
      <section className="w-[90%] mx-auto mt-9 mb-12">
        <div className="w-[300px] p-2 text-center mx-auto mt-[75px] mb-[200px]">
          <img src={wish} alt="wish animation" loading="lazy"/>
          <h4 className="text-[#1B1818] font-semibold text-base">No Items in Your Wishlist</h4>
          <p className="font-light text-[#1B1818] text-base">
            Browse our store and add items to your wishlist by clicking the heart icon. 
            Save your favourites for later!
          </p>
          <button
            className="px-4 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 uppercase text-white w-full hover:bg-transparent hover:border border-[#6A1B9A] hover:text-[#6A1B9A]"
            onClick={navToProducts}
          >
            Browse prouducts
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Favorite