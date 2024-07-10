import { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import product1 from "../assets/product1.svg";
import { MdOutlineDelete } from "react-icons/md"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [count, setCount] = useState(3);

  const maxCount = 10;
  const minCount = 1;

  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if( count > minCount) {
      setCount(count -1);
    }
  }
  const navigate  = useNavigate();

  const handleGoToCheckout = () => {
    navigate('/checkout');
  }

  const handleGoToHome = () => {
    navigate('/');
  }

  return (
    <>
      <Header />
      <section className="flex items-start w-[90%] mx-auto my-[50px] justify-between">
        <div className="border border-[#e0e0e0] rounded-custom-10 basis-[74%]">
          <div className="flex items-center gap-2 p-4">
            <h3 className="text-[] font-medium text-base">Shopping cart </h3>
            <div className="bg-[#6a1b9a] text-white rounded-full px-3 py-1">5</div>
          </div>

          <div className="w-full py-3 px-6 bg-[#E0E0E0] border border-[#E0E0E0] flex items-center justify-between">
            <p className="text-[#717171] text-xs font-medium uppercase basis-[45%]">Products</p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">Price</p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">Quantity</p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">sub total</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <MdOutlineDelete className="text-[30px] text-red-600"/>
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[5%]">$250</p>
          
            <div className="basis-[16%]">
              <div className="flex items-center justify-around">
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={decrement}
                > 
                  <p> - </p>
                </div>
                <p className="text-[#1B1818] font-normal text-sm">{count}</p>
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={increment}
                > 
                  <p> + </p> 
                </div>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[16%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <MdOutlineDelete className="text-[30px] text-red-600"/>
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[5%]">$250</p>
          
            <div className="basis-[16%]">
              <div className="flex items-center justify-around">
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={decrement}
                > 
                  <p> - </p>
                </div>
                <p className="text-[#1B1818] font-normal text-sm">{count}</p>
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={increment}
                > 
                  <p> + </p> 
                </div>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[16%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <MdOutlineDelete className="text-[30px] text-red-600"/>
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[5%]">$250</p>
          
            <div className="basis-[16%]">
              <div className="flex items-center justify-around">
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={decrement}
                > 
                  <p> - </p>
                </div>
                <p className="text-[#1B1818] font-normal text-sm">{count}</p>
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={increment}
                > 
                  <p> + </p> 
                </div>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[16%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <MdOutlineDelete className="text-[30px] text-red-600"/>
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[5%]">$250</p>
          
            <div className="basis-[16%]">
              <div className="flex items-center justify-around">
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={decrement}
                > 
                  <p> - </p>
                </div>
                <p className="text-[#1B1818] font-normal text-sm">{count}</p>
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={increment}
                > 
                  <p> + </p> 
                </div>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[16%]">$750</p>
          </div>

          <div className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
            <div className="flex items-center basis-[40%] gap-2">
              <MdOutlineDelete className="text-[30px] text-red-600"/>
              <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-5">
                <img src={product1} alt="product-1" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1B1818] font-normal text-sm">Dior and Stone Island T-Shirt, Oversized Fit</p>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[5%]">$250</p>
          
            <div className="basis-[16%]">
              <div className="flex items-center justify-around">
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={decrement}
                > 
                  <p> - </p>
                </div>
                <p className="text-[#1B1818] font-normal text-sm">{count}</p>
                <div className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                  onClick={increment}
                > 
                  <p> + </p> 
                </div>
              </div>
            </div>

            <p className="text-[#1B1818] font-normal text-sm basis-[16%]">$750</p>
          </div>

        </div>
        <div className="basis-[24%]">
          <div className="border border-[#e0e0e0] rounded-custom-10 p-5">
            <h3>Cart Total</h3>

            <div className='flex items-center justify-between py-2'>
              <p className="text-[#717171] font-normal text-sm">Sub-total</p>
              <h3 className="text-[#1b1818] font-medium text-sm">$3500</h3>
            </div>

            <div className='flex items-center justify-between py-2'>
              <p className="text-[#717171] font-normal text-sm">Shipping</p>
              <h3 className="text-[#1b1818] font-medium text-sm">Free</h3>
            </div>

            <div className='flex items-center justify-between py-2'>
              <p className="text-[#717171] font-normal text-sm">Discount</p>
              <h3 className="text-[#1b1818] font-medium text-sm">$34</h3>
            </div>

            <div className='flex items-center justify-between py-2'>
              <p className="text-[#717171] font-normal text-sm">Tax</p>
              <h3 className="text-[#1b1818] font-medium text-sm">$61.99</h3>
            </div>

            <div className='flex items-center justify-between py-2 border-t border-[#e0e0e0]'>
              <p>Total</p>
              <h3 className="text-[#1b1818] font-medium text-base">$2585.99 USD</h3>
            </div>

            <button
              className="uppercase px-6 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 text-white text-bold w-full hover:text-[#6a1b9a] hover:bg-white hover:border border-[#6a1b9a]" 
              onClick={handleGoToCheckout}
            >
              proceed to checkout
            </button>

            <button
              className="uppercase px-6 py-2.5 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] text-bold w-full hover:bg-[#6a1b9a] hover:text-white"
              onClick={handleGoToHome}
            >
              continue shopping
            </button>
          </div>

          <div className="border border-[#e0e0e0] rounded-custom-10 mt-5">
            <div className="border-b border-[#e0e0e0] p-5">
              <h3>Coupon Code</h3>
            </div>

            <div className="p-5">
              <input type="text" placeholder='Enter coupon code' className="border border-[#e0e0e0] px-4 py-3 w-full rounded-custom-10"/>
              <button
                className="uppercase px-6 py-2.5 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] text-bold w-full hover:bg-[#6a1b9a] hover:text-white"
              >
                apply coupon
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Cart