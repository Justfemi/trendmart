// import React from 'react'
import { useNavigate } from "react-router-dom";
import wish from "../assets/wish.svg";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
// import { CartContext } from "../context/CartContext";

const Favorite = () => {
  const navigate = useNavigate();
  const { favorite, removeFromFavorite, clearFavorites } = useContext(FavoritesContext); 
  // const { addToCart } = useContext(CartContext)

  const navToProducts = () => {
    navigate("/");
  }

  return (
    <>
      <section className="w-[90%] mx-auto my-9">
        {favorite.length !== 0 && 
          <div className="flex sm:flex-row flex-col items-center justify-between my-4">
            <h2 className="font-medium text-lg">My Wishlist</h2>

            <button
              className="px-6 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 uppercase text-white hover:bg-transparent hover:border border-[#6A1B9A] hover:text-[#6A1B9A]"
              onClick={() => clearFavorites()}
            >
              Clear list
            </button>
          </div>}
        {
          favorite.length === 0 ? (
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
          ) : (
            favorite.map((product) => (
              <div key={product.id} className="flex items-center justify-between md:w-[60%] w-[90%] mx-auto gap-2 py-2 px-1 border-[#e0e0e0] border-t mb-3">
                <div className="flex items-center gap-3">
                  <MdOutlineDelete className="text-[30px] text-red-600 cursor-pointer" onClick={() => removeFromFavorite(product.id)} />
                  <div className="w-[80px] h-[80px] border border-[#e0e0e0] rounded-custom-6">
                    <img
                      src={product.photoUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="">
                  <h3 className="text-[#1b1818] font-medium text-sm mb-3">
                    {product.name}
                  </h3>

                  <p className=""># {product.price}</p>
                </div>

                {/* <button
                  className="px-4 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 uppercase text-white hover:bg-transparent hover:border border-[#6A1B9A] hover:text-[#6A1B9A]"
                  onClick={() => addToCart(product.id)}
                >
                  add to cart
                </button> */}
              </div>
            ))
          )
        }
      </section>
    </>
  )
}

export default Favorite