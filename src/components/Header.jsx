// import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/trendmart-logo.png";
import callIcon from "../assets/call.svg";
import infoIcon from "../assets/info.svg";
import locationIcon from "../assets/location.svg";
import headsetIcon from "../assets/headset.svg";
// import flagng from "../assets/flagNg.svg";
import heartIcon from "../assets/heart.svg";
import cartIcon from "../assets/cart.svg";
import userIcon from "../assets/user.svg"
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="font-general-sans">
      <div className="bg-[#1B1818] shadow-inner w-full h-[42px] items-center justify-between px-[65px] hidden md:flex">
        <div className="text-[#181818]">Space</div>
        {/* middle div */}
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <img src={locationIcon} alt="location icon" />
            <p className="text-white underline text-sm font-normal">Track Order</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={headsetIcon} alt="headset icon" />
            <p className="text-white underline text-sm font-normal">Customer Support</p>
          </div>
          <div className="flex items-center gap-1">
            <img src={infoIcon} alt="info icon" />
            <p className="text-white underline text-sm font-normal">Need Help</p>
          </div>
        </div>
        {/* third div */}
        <div>
          <div className="flex items-center gap-1">
            <img src={callIcon} alt="call icon" />
            <p className="text-white underline text-sm font-normal">+234 815 3777 444</p>
          </div>
        </div>
      </div>
      <div className="bg-[#6A1B9A] w-full sm:px-[65px] px-5 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="trendmart logo" className="py-[20px]"/>
        </Link>
        <div className="flex items-center gap-3">
          {/* <div className="md:flex items-center gap-1 cursor-pointer hidden">
            <img src={flagng} alt="nigeria flag" className="w-[24px] h-[24px]" />
            <p className="text-white text-sm font-normal">NGN</p>
            <IoIosArrowDown className="text-white"/>
          </div> */}

          <div className="w-[40px] h-[40px] bg-[#F5F7FA] rounded-full md:flex items-center justify-center cursor-pointer hidden">
            <img src={heartIcon} alt="heart icon"/>
          </div>

          <div className="w-[40px] h-[40px] bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer">
            <img src={cartIcon} alt="cart icon" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-[40px] h-[40px] bg-[#F5F7FA] rounded-full flex items-center justify-center">
              <img src={userIcon} alt="user icon" />
            </div>
            <p className="text-white text-sm font-normal hidden md:block">Chioma</p>
            <IoIosArrowDown className="text-white"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header