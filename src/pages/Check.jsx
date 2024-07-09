// import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import product1 from "../assets/product1.svg";

const Check = () => {
  return (
    <>
      <Header />
      <section className="w-[80%] mx-auto border border-[#E0E0E0] rounded-tr-custom-10 rounded-tl-custom-10 my-5">
        <div className="py-5 px-6 border-b border-[#E0E0E0]">
          <h4 className=" font-medium text-xl">Checkout</h4>
        </div>

        <div className="w-[70%] border border-[#6a1b9a] rounded-custom-3 p-6 flex items-center justify-between bg-[#FBF9FC] mx-auto mt-6 mb-3">
          <p>Total</p>

          <div className="text-right">
            <h3 className="text-[#6a1b9a] font-semibold text-lg mb-2">$2,585.99 USD</h3>
            <div className="flex items-center gap-2 text-[#717171] font-normal text-sm">
              <p>Sub-total $2,500</p> •
              <p>Discount $24</p> •
              <p>Tax $61.99</p>
            </div>
          </div>
        </div>

        <div className="w-[70%] mx-auto border border-[]#E0E0E0">
          <p className="text-[#717171] uppercase font-normal text-base my-4 mx-6">Order Details</p>

          <div className="w-full py-3 px-6 bg-[#E0E0E0] border border-[#E0E0E0] flex items-center justify-between">
            <p className="text-[#717171] text-xs font-medium uppercase">Products</p>

            <div className="flex item-center gap-24">
              <p className="text-[#717171] text-xs font-medium uppercase">Price</p>

              <p className="text-[#717171] text-xs font-medium uppercase">Quantity</p>
            </div>

            <p className="text-[#717171] text-xs font-medium uppercase">sub total</p>
          </div>

          <div>
            <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
              <div className="flex items-center gap-1">
                <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                  <img src={product1} alt="product-1" className="w-full h-full object-cover" />
                </div>
                <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
              </div>

              <div className="flex item-center gap-32">
                <p className="text-[#1B1818] font-normal text-sm">$250</p>

                <p className="text-[#1B1818] font-normal text-sm">3</p>
              </div>

              <p className="text-[#1B1818] font-normal text-sm">$750</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Check