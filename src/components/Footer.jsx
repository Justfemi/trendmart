// import React from 'react'
import logo from "../assets/trendmart-logo.png";
import { FaFacebook } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { AiOutlineReddit } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import appStore from "../assets/appstore.svg";
import playStore from "../assets/playstore.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B1818] pt-[50px] px-5 sm:px-[68px] text-white font-general-sans">
      <div className="w-full grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="mb-5">
          <img src={logo} alt="trendmart logo"/>
          <p className="text-xs font-normal mt-[15px]">Customer Supports: </p>
          <h4 className="font-normal text-sm mb-1">+234 815 3777 444</h4>
          <h4 className="font-normal text-sm mb-1">info@trendmart.ng</h4>
          <p className="font-normal text-sm">No 4 Madiana Close Off Dar-Es- Salam street, Wuse 2, Abuja</p>
          <div className="flex items-center gap-3 mt-4">
            <img src={appStore} alt="download from app store" />
            <img src={playStore} alt="download from play store" />
          </div>
        </div>

        <div className="mb-5">
          <h3 className="font-medium text-sm mb-2">CATEGORY</h3>
          <p className="font-normal text-sm mb-2 underline cursor-pointer">Men</p>
          <p  className="font-normal text-sm mb-2 underline cursor-pointer">Women</p>
          <p className="font-normal text-sm mb-2 underline cursor-pointer">Kids</p>
          <div className="flex flex-col mb-2 gap-2 mt-1">
            <p className="font-normal text-sm">Follow us: </p>
            <div className="flex items-center gap-2">
              <FaTwitter />
              <FaFacebook />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="font-medium text-sm mb-2">QUICK LINKS</h3>
          <p className="font-normal text-sm mb-2 underline cursor-pointer">Shoping Cart</p>
          <p className="font-normal text-sm mb-2 underline cursor-pointer">Saved</p>
          <p className="font-normal text-sm mb-2 underline cursor-pointer">Shop Product</p>
          <p className="font-normal text-sm mb-2 underline cursor-pointer">Track Order</p>
          <p className="font-normal text-sm mb-2 underline cursor-pointer">Customer Help</p>
          <p className="font-normal text-sm underline">About us</p>
        </div>

        <div className="mb-5">
          <p className="font-normal text-base mb-2">Subscribe for updates</p>
          <p className="font-normal text-sm mb-6">Sign up your email and be the first to know about our special offers and discount.</p>
          
          <div className="flex flex-col">
            <input type="email" placeholder="Email Address" className="px-4 py-2.5 bg-white border border-[#E0E0E0] rounded-custom-10 outline-none" />
            <button className="px-4 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-10 uppercase text-white hover:bg-[#3e1c53]">Submit</button>
          </div>
        </div>
      </div>

      <p className="text-center text-xs font-normal pt-10 pb-3">Powered by HNG Internship 2024</p>
    </footer>
  )
}

export default Footer