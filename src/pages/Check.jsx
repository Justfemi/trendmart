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

        <div className="w-[70%] mx-auto border border-[#E0E0E0] rounded-br-custom-10">
          <p className="text-[#717171] uppercase font-normal text-base my-4 mx-6">Order Details</p>

          <div className="w-full py-3 px-6 bg-[#E0E0E0] border border-[#E0E0E0] flex items-center justify-between">
            <p className="text-[#717171] text-xs font-medium uppercase basis-[45%]">Products</p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">Price</p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">Quantity</p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">sub total</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$250</p>
          
            <div className="basis-[12%]">
              <div className=" border border-[#6a1b9a] rounded-full flex w-12 h-12 items-center justify-center">
                <p className="text-[#1B1818] font-normal text-sm">3</p>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$250</p>
          
            <div className="basis-[12%]">
              <div className=" border border-[#6a1b9a] rounded-full flex w-12 h-12 items-center justify-center">
                <p className="text-[#1B1818] font-normal text-sm">3</p>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$250</p>
          
            <div className="basis-[12%]">
              <div className=" border border-[#6a1b9a] rounded-full flex w-12 h-12 items-center justify-center">
                <p className="text-[#1B1818] font-normal text-sm">3</p>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$250</p>
          
            <div className="basis-[12%]">
              <div className=" border border-[#6a1b9a] rounded-full flex w-12 h-12 items-center justify-center">
                <p className="text-[#1B1818] font-normal text-sm">3</p>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$250</p>
          
            <div className="basis-[12%]">
              <div className=" border border-[#6a1b9a] rounded-full flex w-12 h-12 items-center justify-center">
                <p className="text-[#1B1818] font-normal text-sm">3</p>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[12%]">$750</p>
          </div>

          <div className=" border border-[#e0e0e0] w-[95%] mx-auto mt-3 rounded-custom-10 flex items-center justify-center">
            <div className="basis-1/2 p-4">
              <h3>Shipping Address</h3>
              <p>Olakunle Oluremi</p>
              <p>No 4 madiana close, off Dar-Es-Salam street, wuse 2 Abuja, Nigeria</p>
              <p>Email Address: <span> olakunle.o@gmail.com </span></p>
              <p>Phone Number: <span> +234 815 3777 444 </span></p>
              <p>Email: <span> olakunle.o@gmail.com </span></p>
            </div>

            <div className="basis-1/2 p-4 border-l border-[#e0e0e0]">
              <h3>Order Notes</h3>
              <p>
                Please ensure that the blue dress is in size M and includes the matching belt as shown in the product image. 
                I would appreciate if the items could be gift-wrapped with a birthday card included. If possible, deliver before 
                July 10th as it&apos;s a gift for my friend&apos;s birthday. Thank you!
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-[70%] mx-auto border-l border-r border-b border-[#E0E0E0] flex items-center justify-center">
          <div className="basis-1/2 p-4">
            <h3>Shipping Address</h3>
            <p>Olakunle Oluremi</p>
            <p>No 4 madiana close, off Dar-Es-Salam street, wuse 2 Abuja, Nigeria</p>
            <p>Email Address: <span> olakunle.o@gmail.com </span></p>
            <p>Phone Number: <span> +234 815 3777 444 </span></p>
            <p>Email: <span> olakunle.o@gmail.com </span></p>
          </div>

          <div className="basis-1/2 p-4 border-l border-[#e0e0e0]">
            <h3>Order Notes</h3>
            <p>
              Please ensure that the blue dress is in size M and includes the matching belt as shown in the product image. 
              I would appreciate if the items could be gift-wrapped with a birthday card included. If possible, deliver before 
              July 10th as it&apos;s a gift for my friend&apos;s birthday. Thank you!
            </p>
          </div>
        </div> */}
      </section>
      <Footer />
    </>
  )
}

export default Check
      {/* <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b"></td>
          </tr>
        </tbody>
      </table> */}