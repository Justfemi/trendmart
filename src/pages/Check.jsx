import { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import product1 from "../assets/product1.svg";
import success from "../assets/success.svg";
import checkmark from "../assets/checksuccess.svg";
import Modal from "../components/Modal";
import { useNavigate } from 'react-router-dom';

const Check = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewOrder = () => {
    setIsModalOpen(false);
    navigate('/cart');
  }

  const handleShopping = () => {
    setIsModalOpen(false);
    navigate('/');
  }

  return (
    <>
      <Header />
      <section className="sm:w-[80%] w-[95%] mx-auto border border-[#E0E0E0] rounded-tr-custom-10 rounded-tl-custom-10 my-5">
        <div className="py-5 sm:px-6 px-2 border border-b border-[#E0E0E0] flex item-center justify-between">
          <h4 className=" font-medium text-xl">Checkout</h4>

          <h5 className="text-[#6a1b9a] font-bold text-sm">Step 3 of 3</h5>
        </div>

        <div className='sm:hidden block'>
          <p className="text-[#717171] uppercase font-normal text-base my-4 mx-6">Order Details</p>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 p-2 border-[#e0e0e0] border-t">
              <div className="w-[80px] h-[80px] border border-[#e0e0e0] rounded-custom-6">
                <img src={product1} alt="first product" className="w-full h-full object-cover"/>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#1b1818] font-medium text-sm mb-3">Dior and Stone Island T-Shirt, Oversized Fit</h3>

                <div className="flex items-center gap-32">
                  <h3 className="text-[#1b1818] font-medium text-sm">$250</h3>
                  <p className="text-[#717171] font-normal text-sm">3</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 border-[#e0e0e0] border-t">
              <div className="w-[80px] h-[80px] border border-[#e0e0e0] rounded-custom-6">
                <img src={product1} alt="first product" className="w-full h-full object-cover"/>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#1b1818] font-medium text-sm mb-3">Dior and Stone Island T-Shirt, Oversized Fit</h3>

                <div className="flex items-center gap-32">
                  <h3 className="text-[#1b1818] font-medium text-sm">$250</h3>
                  <p className="text-[#717171] font-normal text-sm">3</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 border-[#e0e0e0] border-t">
              <div className="w-[80px] h-[80px] border border-[#e0e0e0] rounded-custom-6">
                <img src={product1} alt="first product" className="w-full h-full object-cover"/>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#1b1818] font-medium text-sm mb-3">Dior and Stone Island T-Shirt, Oversized Fit</h3>

                <div className="flex items-center gap-32">
                  <h3 className="text-[#1b1818] font-medium text-sm">$250</h3>
                  <p className="text-[#717171] font-normal text-sm">3</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 border-[#e0e0e0] border-t">
              <div className="w-[80px] h-[80px] border border-[#e0e0e0] rounded-custom-6">
                <img src={product1} alt="first product" className="w-full h-full object-cover"/>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#1b1818] font-medium text-sm mb-3">Dior and Stone Island T-Shirt, Oversized Fit</h3>

                <div className="flex items-center gap-32">
                  <h3 className="text-[#1b1818] font-medium text-sm">$250</h3>
                  <p className="text-[#717171] font-normal text-sm">3</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 border-[#e0e0e0] border-t">
              <div className="w-[80px] h-[80px] border border-[#e0e0e0] rounded-custom-6">
                <img src={product1} alt="first product" className="w-full h-full object-cover"/>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[#1b1818] font-medium text-sm mb-3">Dior and Stone Island T-Shirt, Oversized Fit</h3>

                <div className="flex items-center gap-32">
                  <h3 className="text-[#1b1818] font-medium text-sm">$250</h3>
                  <p className="text-[#717171] font-normal text-sm">3</p>
                </div>
              </div>
            </div>
          </div>

          {/* total box */}
          <div className="border border-[#6a1b9a] bg-[#FBF9FC] mx-auto w-[95%] py-5 px-2 rounded-custom-4 my-6">
            <div className='flex items-center justify-between p-2'>
              <p className="text-[#717171] font-normal text-sm">Sub-total</p>
              <h3 className="text-[#1b1818] font-medium text-sm">$3500</h3>
            </div>

            <div className='flex items-center justify-between p-2'>
              <p className="text-[#717171] font-normal text-sm">Shipping</p>
              <h3 className="text-[#1b1818] font-medium text-sm">Free</h3>
            </div>

            <div className='flex items-center justify-between p-2'>
              <p className="text-[#717171] font-normal text-sm">Discount</p>
              <h3 className="text-[#1b1818] font-medium text-sm">$34</h3>
            </div>

            <div className='flex items-center justify-between p-2'>
              <p className="text-[#717171] font-normal text-sm">Tax</p>
              <h3 className="text-[#1b1818] font-medium text-sm">$61.99</h3>
            </div>

            <div className='flex items-center justify-between p-2'>
              <p>Total</p>
              <h3 className="text-[#6a1b9a] font-medium text-base">$2585.99 USD</h3>
            </div>
          </div>

          {/* Last div */}
          <div className='border border-[#e0e0e0] rounded-custom-4'>
            <div className="basis-1/2 text-[#717171] text-sm font-normal p-2">
              <h3 className="text-[#1b1818] text-base font-medium">Shipping Address</h3>
              <p>Olakunle Oluremi</p>
              <p>No 4 madiana close, off Dar-Es-Salam street, wuse 2 Abuja, Nigeria</p>
              <p className="text-[#1b1818]">Email Address: <span className="text-[#717171]"> olakunle.o@gmail.com </span></p>
              <p className="text-[#1b1818]">Phone Number: <span className="text-[#717171]"> +234 815 3777 444 </span></p>
            </div>

            <div className="basis-1/2 border-t border-[#e0e0e0] p-2">
              <h3 className="text-[#1b1818] text-base font-medium">Order Notes</h3>
              <p className="text-[#717171] text-sm font-normal">
                Please ensure that the blue dress is in size M and includes the matching belt as shown in the product image. 
                I would appreciate if the items could be gift-wrapped with a birthday card included. If possible, deliver before 
                July 10th as it&apos;s a gift for my friend&apos;s birthday. Thank you!
              </p>
            </div>
          </div>
        </div>

        <div className="flex py-6 mt-6 px-4 justify-center">
          <button className="uppercase px-20 py-2.5 bg-[#6A1B9A] hover:bg-transparent hover:text-[#6a1b9a] 
              mt-3 rounded-custom-50 text-white text-bold border border-[#6a1b9a] w-full"
              onClick={handleOpenModal}
          >Place order</button>
        </div>

        <div className="w-[70%] border border-[#6a1b9a] rounded-custom-3 p-6 items-center justify-between bg-[#FBF9FC] mx-auto mt-6 mb-3 hidden sm:flex">
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

        <div className="w-[70%] mx-auto border border-[#E0E0E0] rounded-br-custom-10 rounded-bl-custom-10 hidden sm:block">
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

          <div className=" border border-[#e0e0e0] w-[98%] mx-auto mt-3 rounded-br-custom-10 rounded-bl-custom-10 flex items-center justify-center">
            <div className="basis-1/2 text-[#717171] text-sm font-normal p-2">
              <h3 className="text-[#1b1818] text-base font-medium">Shipping Address</h3>
              <p>Olakunle Oluremi</p>
              <p>No 4 madiana close, off Dar-Es-Salam street, wuse 2 Abuja, Nigeria</p>
              <p className="text-[#1b1818]">Email Address: <span className="text-[#717171]"> olakunle.o@gmail.com </span></p>
              <p className="text-[#1b1818]">Phone Number: <span className="text-[#717171]"> +234 815 3777 444 </span></p>
            </div>

            <div className="basis-1/2 border-l border-[#e0e0e0] p-2">
              <h3 className="text-[#1b1818] text-base font-medium">Order Notes</h3>
              <p className="text-[#717171] text-sm font-normal">
                Please ensure that the blue dress is in size M and includes the matching belt as shown in the product image. 
                I would appreciate if the items could be gift-wrapped with a birthday card included. If possible, deliver before 
                July 10th as it&apos;s a gift for my friend&apos;s birthday. Thank you!
              </p>
            </div>
          </div>

          <div className="flex py-6 mt-6 px-4 justify-end">
            <button className="uppercase px-20 py-2.5 bg-[#6A1B9A] hover:bg-transparent hover:text-[#6a1b9a] 
                mt-3 rounded-custom-50 text-white text-bold border border-[#6a1b9a]"
                onClick={handleOpenModal}
            >Place order</button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="relative p-2">
            <img src={success} alt="success animation" />
            <img src={checkmark} alt="" className='absolute sm:top-1 sm:right-[130px] top-2 right-[110px]'/>
            <div className="mt-[-80px] text-center">
              <h3 className="text-[#1b18181] font-medium text-base">Order Placed Succesfully</h3>
              <p className='text-[#717171] font-normal text-sm'>
                Thank you for shopping with us! Your order is placed successfully and we are thrilled to have you as a customer
              </p>
              <div className='flex flex-col w-full'>
                <button className="uppercase px-6 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 text-white text-bold"
                  onClick={handleViewOrder}
                >
                  view order details
                </button>

                <button className="uppercase px-6 py-2.5 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] text-bold"
                  onClick={handleShopping}
                >continue shopping</button>
              </div>
            </div>
          </div>
        </Modal>
      </section>
      <Footer />
    </>
  )
}
export default Check