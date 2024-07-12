// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/trendmart-logo.png";
import callIcon from "../assets/call.svg";
import infoIcon from "../assets/info.svg";
import locationIcon from "../assets/location.svg";
import wlocation from "../assets/wlocation.svg";
import wheadset from "../assets/wheadset.svg";
import whelp from "../assets/whelp.svg";
import { useState } from "react";
import headsetIcon from "../assets/headset.svg";
import settings from "../assets/settings.svg";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
// import userIcon from "../assets/user.svg"
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  const navigateToFavPage = () => {
    navigate("/favs");
  }

  const navigateToCartPage = () => {
    navigate("/cart");
  }
  return (
    <header className="">
      <div className="bg-[#1B1818] shadow-inner w-full h-[42px] items-center justify-between px-[65px] hidden md:flex">
        <div className="text-white flex items-center gap-2">
          <p className="font-normal text-sm">Follow us: </p>
          <FaTwitter className="cursor-pointer text-white hover:text-[#6a1b9a]" />
          <FaFacebook className="cursor-pointer text-white hover:text-[#6a1b9a]" />
          <FaPinterestP className="cursor-pointer text-white hover:text-[#6a1b9a]" />
          <FaInstagram className="cursor-pointer text-white hover:text-[#6a1b9a]" />
        </div>
        {/* middle div */}
        <div className="flex gap-3">
          <div className="flex items-center gap-1 cursor-pointer text-white hover:text-[#6a1b9a]">
            <img src={locationIcon} alt="location icon" />
            <p className="underline text-sm font-normal">Track Order</p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-white hover:text-[#6a1b9a]">
            <img src={headsetIcon} alt="headset icon" />
            <p className="underline text-sm font-normal">Customer Support</p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-white hover:text-[#6a1b9a]">
            <img src={infoIcon} alt="info icon" />
            <p className="underline text-sm font-normal">Need Help</p>
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
          <div 
            className="w-[40px] h-[40px] bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer group hover:bg-[#6a1b9a]"
            onClick={navigateToFavPage}
          >
            <MdOutlineFavoriteBorder className="text-2xl text-[#6a1b9a] group-hover:text-white"/>
          </div>

          <div 
            className="w-[40px] h-[40px] bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer group hover:bg-[#6a1b9a]"
            onClick={navigateToCartPage}
          >
            <IoCartOutline className="text-2xl text-[#6a1b9a] group-hover:text-white" />
          </div>

          <div 
            className="md:flex items-center gap-1 cursor-pointer hidden group"
            onClick={toggleProfileMenu}
          >
            <div className="w-[40px] h-[40px] bg-[#F5F7FA] rounded-full flex items-center justify-center group-hover:bg-[#6a1b9a]">
              <FaRegUser className="text-xl text-[#6a1b9a] group-hover:text-white" />
            </div>
            <p className="text-white text-sm font-normal">Chioma</p>
            <IoIosArrowDown className="text-white"/>
          </div>

          <div 
            className="flex items-center gap-1 cursor-pointer md:hidden group"
            onClick={toggleProfile}
          >
            <div className="w-[40px] h-[40px] bg-[#F5F7FA] rounded-full flex items-center justify-center group-hover:bg-[#6a1b9a]">
              <FaRegUser className="text-xl text-[#6a1b9a] group-hover:text-white" />
            </div>
            <IoIosArrowDown className="text-white"/>
          </div>
        </div>
      </div>
        {isProfileOpen && (
          <div className="absolute mt-0 bg-white rounded-custom-3 py-3 px-5 z-50 right-0 w-[200px] shadow-lg">
            <p className="text-[#6A1B9A] font-normal py-4">Chioma Oluremi</p>
            <div className="flex items-center gap-3 w-full border-y border-[#E0E0E0] cursor-pointer">
              <img src={wlocation} alt="location icon" />
              <p className="text-[#1B1818] py-4 text-xs font-normal">Track Order</p>
            </div>
            <div className="flex items-center gap-3 w-full border-b border-[#E0E0E0] cursor-pointer">
              <img src={wheadset} alt="headset icon" />
              <p className="text-[#1B1818] py-4 text-xs font-normal">Customer Support</p>
            </div>
            <div className="flex items-center gap-3 w-full border-b border-[#E0E0E0] cursor-pointer">
              <img src={whelp} alt="info icon" />
              <p className="text-[#1B1818] py-4 text-xs font-normal">Need Help</p>
            </div>
            <div className="flex items-center gap-3 w-full cursor-pointer">
              <img src={settings} alt="info icon" />
              <p className="text-[#1B1818] py-4 text-xs font-normal">Account Settings</p>
            </div>
          </div>
        )}

        {isProfileMenuOpen && (
          <div className="absolute mt-0 bg-white rounded-custom-3 py-3 px-5 z-50 right-0 w-[200px] shadow-lg">
            <div className="flex items-center gap-3 w-full cursor-pointer">
              <img src={settings} alt="info icon" />
              <p className="text-[#1B1818] py-4 text-xs font-normal">Account Settings</p>
            </div>
          </div>
        )}
    </header>
  )
}

export default Header