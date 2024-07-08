import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import RatingStar from "../components/RatingStars";
// import Dropdown from '../components/Dropdown';
import hero1 from "../assets/firsthero.svg"
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
// import { IoEyeOutline } from "react-icons/io5";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import Products from '../../data';
import Sidebar from "../components/Sidebar";
import menuIcon from "../assets/hamburger.svg";

const ProductList = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    console.log('clicked');
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <Header />
      <section className="max:h-[330px] w-[90%] mx-auto my-[15px]">
        <img src={hero1} alt="first hero img" className="h-full w-full object-cover" />
      </section>
      <section className="mt-[30px] w-[90%] mx-auto flex gap-3 items-start justify-between pb-4 font-general-sans">
        <div 
          className="top-0 left-0 sm:w-[25%] hidden sm:block"
        >
          <Sidebar />
        </div>

        <div className="sm:w-[72%] w-[100%] z-1 font-general-sans">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center border border-[#E0E0E0] py-3 px-6 bg-white shadow-sm rounded-custom-10 sm:w-[50%] w-[80%]">
              <FiSearch className="text-[#717171] mr-2"/>
              <input 
                type="search"
                placeholder="Search for anything..." 
                className="flex-grow outline-none bg-transparent text-[#717171] text-sm w-full"
              />
            </div>

            <div className="items-center gap-2 hidden sm:flex">
              <p className="text-[#1B1818] font-normal hidden sm:block text-sm">Sort by:</p>
              <select className="border border-[#E0E0E0] py-3 px-2 rounded-custom-10 focus:outline-none">
                <option className="text-[#1B1818] text-sm font-normal my-[10px]">Most Popular</option>
                <option className="text-[#1B1818] text-sm font-normal my-[10px]">Newest arrivals</option>
                <option className="text-[#1B1818] text-sm font-normal my-[10px]">Customer Rating</option>
                <option className="text-[#7d7777] text-sm font-normal">Price: High to Low</option>
                <option className="text-[#1B1818] text-sm font-normal">Price: Low to High</option>
              </select>
            </div>

            <div className="border cursor-pointer p-2.5 rounded-custom-10 sm:hidden block">
              <img src={menuIcon} alt="menu-toggle icon" onClick={ toggleNav }/>
            </div>
          </div>

          <div className="w-full grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
            {
              Products && Products.map(product => {
                return (
                  <div key={product.id} className="group border border-[#E0E0E0] rounded-custom-10 p-4 shadow-lg">
                    <div className="relative w-full">
                      <img src={product.image} alt={product.title} className="w-full"/>
                      <div className="absolute sm:flex items-center justify-center gap-2 w-full h-full left-0 top-0 bg-black bg-opacity-30 opacity-0 transition-opacity group-hover:opacity-100 hidden">
                        <div className="w-[40px] h-[40px] bg-[#FFF] text-[#1B1818] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6A1B9A] hover:text-white">
                          <MdOutlineFavoriteBorder />
                        </div>
      
                        <div className="w-[40px] h-[40px] bg-[#FFF] text-[#1B1818] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6A1B9A] hover:text-white">
                          <IoCartOutline className="text-lg"/>
                        </div>
      
                      </div>
                    </div>
                    <div className="mt-6">
                      <RatingStar rating={product.rating} />
                      <h4 className="font-normal text-[#1B1B1B] text-sm my-[8px] leading-5">{product.title}</h4>
                      <p className="text-[#6A1B9A] font-semibold text-sm"><span className="line-through text-[#717171] text-sm font-normal mr-1">{product.oldprice}</span>${product.price}</p>
                    </div>
                    <div className="flex flex-col sm:hidden">
                      <button className="uppercase px-6 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 text-white text-bold">add to cart</button>

                      <button className="uppercase px-6 py-2.5 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] text-bold">save</button>
                    </div>
                  </div>
                );
              })
            }
          </div>

          {/* pagination */}
          <div className="flex justify-center items-center gap-3 sm:gap-7 pt-8 mb-12 font-general-sans border-t border-[#E0E0E0]">
            <div>
              <p>Page 1 of 30</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={left} alt="left arrow" className="border border-[#E0E0E0] p-3 rounded-custom-8 cursor-pointer hover:border-[#6A1B9A]" />
              <p className="bg-[#6A1B9A] text-white px-4 py-2 rounded-custom-8 text-sm font-light cursor-pointer"> 1 </p>
              <p className="cursor-pointer border border-white hidden sm:block hover:border-[#6A1B9A] rounded-custom-8 px-3 py-1"> 2 </p>
              <p className="cursor-pointer border border-white hidden lg:block hover:border-[#6A1B9A] rounded-custom-8 px-3 py-1"> 3 </p>
              <p> ... </p>
              <p className="cursor-pointer border border-white hidden lg:block hover:border-[#6A1B9A] rounded-custom-8 px-3 py-1"> 28 </p>
              <p className="cursor-pointer border border-white hidden sm:block hover:border-[#6A1B9A] rounded-custom-8 px-3 py-1"> 29 </p>
              <p className="cursor-pointer border border-white hidden sm:block hover:border-[#6A1B9A] rounded-custom-8 px-3 py-1"> 30 </p>
              <img src={right} alt="right arrow" className="border border-[#E0E0E0] p-3 rounded-custom-8 cursor-pointer hover:border-[#6A1B9A]" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProductList