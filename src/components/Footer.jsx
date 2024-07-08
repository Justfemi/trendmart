// import React from 'react'
import logo from "../assets/trendmart-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineReddit } from "react-icons/ai";
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
          <p className="text-sm font-light mt-[15px]">Customer Supports: </p>
          <h4 className="font-medium text-sm mb-1">+234 815 3777 444</h4>
          <h4 className="font-medium text-sm mb-1">info@trendmart.ng</h4>
          <p className="font-light text-sm">No 4 Madiana Close Off Dar-Es- Salam street, Wuse 2, Abuja</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="font-normal text-sm">Follow us: </p>
            <FaTwitter />
            <FaFacebook />
            <FaPinterestP />
            <AiOutlineReddit />
            <FaYoutube />
            <FaInstagram />
          </div>
          <div className="flex items-center gap-3 mt-4">
            <img src={appStore} alt="download from app store" />
            <img src={playStore} alt="download from play store" />
          </div>
        </div>

        <div className="mb-5">
          <h3 className="font-medium text-md mb-2">CATEGORY</h3>
          <p className="font-light text-sm mb-2">Men</p>
          <p  className="font-light text-sm mb-2">Women</p>
          <p className="font-light text-sm">Kids</p>
        </div>

        <div className="mb-5">
          <h3 className="font-medium text-md mb-2">QUICK LINKS</h3>
          <p className="font-light text-sm mb-2">Shop Product</p>
          <p className="font-light text-sm mb-2">Shoping Cart</p>
          <p className="font-light text-sm mb-2">Saved</p>
          <p className="font-light text-sm mb-2">Track Order</p>
          <p className="font-light text-sm mb-2">Customer Help</p>
          <p className="font-light text-sm">About us</p>
        </div>

        <div className="mb-5">
          <p className="font-medium text-md mb-2">Subscribe for updates</p>
          <p className="font-light font-sm mb-6">Sign up your email and be the first to know about our special offers and discount.</p>
          
          <div className="flex flex-col">
            <input type="email" placeholder="Email Address" className="px-4 py-3 bg-white border border-[#E0E0E0] rounded-custom-50 outline-none" />
            <button className="px-4 py-3 bg-[#6A1B9A] mt-3 rounded-custom-50 uppercase">Subscribe</button>
          </div>
        </div>
      </div>

      <p className="text-center text-sm font-light pt-10 pb-3">Powered by HNG Internship 2024</p>
    </footer>
  )
}

export default Footer