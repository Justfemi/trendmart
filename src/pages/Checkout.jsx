import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CountryDropdown from "../components/countryDropdown";
import mastercard from "../assets/mastercard.svg";
import visacard from "../assets/visacard.svg";
import amazon from "../assets/amazon.svg";
import paypal from "../assets/paypal.png";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  const handleNextPage = () => {
    navigate("/check");
  }

  return (
    <>
      <Header />
      <section className="sm:w-[80%] w-[95%] mx-auto border border-[#E0E0E0] rounded-tr-custom-10 rounded-tl-custom-10 my-5">
        {submitted ? (
          <div>
            <div className="py-5 sm:px-6 px-2 border border-b border-[#E0E0E0] flex item-center justify-between">
              <h4 className=" font-medium text-xl">Checkout</h4>

              <h5 className="text-[#6a1b9a] font-bold text-sm">Step 2 of 3</h5>
            </div>

            <div className="w-[90%] mx-auto lg:p-6 p-2 my-8">
              <div className="sm:flex border border-[#e0e0e0] items-center justify-around mb-6 rounded-custom-10 hidden">
                <div className="flex flex-col m-auto border-r border-[#e0e0e0] p-9 w-full items-center cursor-pointer">
                  <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                    <img src={mastercard} alt="mastercard logo" />
                  </div>
                  <p className="text-xs font-medium mb-2 text-[#1B1818] hidden lg:block">MasterCard</p>
                  <input
                    type="radio"
                    name="payment"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                  />
                </div>

                <div  className="flex flex-col border-r m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer">
                  <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                    <img src={visacard} alt="visacard logo" />
                  </div>
                  <p className="text-xs font-medium mb-2 text-[#1B1818] hidden lg:block">VisaCard</p>
                  <input
                    type="radio"
                    name="payment"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                  />
                </div>

                <div  className="flex flex-col border-r m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer">
                  <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                    <img src={paypal} alt="paypal logo" />
                  </div>
                  <p className="text-xs font-medium mb-2 text-[#1B1818] hidden lg:block">PayPal</p>
                  <input
                    type="radio"
                    name="payment"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                  />
                </div>

                <div  className="flex flex-col border-r m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer">
                  <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                    <img src={amazon} alt="amazon logo" />
                  </div>
                  <p className="text-xs font-medium mb-2 text-[#1B1818] hidden lg:block">Amazon Pay</p>
                  <input
                    type="radio"
                    name="payment"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                  />
                </div>
              </div>

              <div className="sm:hidden flex items-center justify-between">
                <div>
                  <div className="flex flex-col m-auto border border-[#e0e0e0] p-9 w-full items-center cursor-pointer rounded-custom-10 mb-8">
                    <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                      <img src={mastercard} alt="mastercard logo" />
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                    />
                  </div>

                  <div  className="flex flex-col border m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer rounded-custom-10">
                    <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                      <img src={visacard} alt="visacard logo" />
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                    />
                  </div>
                </div>

                <div>
                  <div  className="flex flex-col border m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer rounded-custom-10 mb-8">
                    <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                      <img src={paypal} alt="paypal logo" />
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                    />
                  </div>

                  <div  className="flex flex-col border m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer rounded-custom-10">
                    <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                      <img src={amazon} alt="amazon logo" />
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                    />
                  </div>
                </div>
              </div>
              <form>
                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">Card Number</p>
                    <input type="text" placeholder="0000 0000 0000 0000" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">Name on card</p>
                    <input type="text" placeholder="Olakunle Oluremi" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>
                </div>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">Expiry Date</p>
                    <input type="text" placeholder="12/2027" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">CVV</p>
                    <input type="text" placeholder="000" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>
                </div>

                <div className="flex py-6 mt-6 sm:justify-end justify-center">
                  <button className="uppercase px-20 py-2.5 bg-[#6A1B9A] hover:bg-transparent hover:text-[#6a1b9a] 
                      mt-3 rounded-custom-50 text-white text-bold border border-[#6a1b9a] w-full"
                      onClick={handleNextPage}
                  >next</button>
                </div>
              </form>
            </div>
          </ div>
        ) : (
          <div>
            <div className="py-5 sm:px-6 px-2 border-b border-[#E0E0E0] flex item-center justify-between">
              <h4 className=" font-medium text-xl">Checkout</h4>

              <h5 className="text-[#6a1b9a] font-bold text-sm">Step 1 of 3</h5>
            </div>

            <div className="w-[95%] mx-auto lg:p-6 p-1 my-8">
              <form>
                <div className="lg:w-1/2 w-full flex-col justify-start">
                  <p className="text-xs font-medium mb-2 text-[#1B1818]">Country/Region</p>
                  <CountryDropdown />
                </div>

                <p className="text-[#717171] uppercase font-normal text-xs-custom mt-4 mb-2.3">contact information</p>

                <div className="w-full">
                  <p className="text-xs font-medium mb-2 text-[#1B1818]">Full Name</p>
                  <input type="text" placeholder="Enter full name" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                </div>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">Email Address</p>
                    <input type="email" placeholder="Enter email address" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">Phone Number</p>
                    <input type="text" placeholder="Enter phone number" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>
                </div>

                <p className="text-[#717171] uppercase font-normal text-xs-custom mt-4 mb-2.3">address</p>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">Address</p>
                    <input type="email" placeholder="Enter street details" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">State</p>
                    <input type="text" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>
                </div>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">City</p>
                    <input type="text" placeholder="" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-xs font-medium mb-2 text-[#1B1818]">ZIP Code</p>
                    <input type="text" placeholder="Enter zip code" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 mb-6">
                  <input type="checkbox" name="" id="" />
                  <p className="text-[#717171] font-normal text-base">Set as default shipping address</p>
                </div>

                <p className="text-[#717171] uppercase font-normal text-xs-custom mb-2.3">Additional Information</p>

                <div className="w-full">
                  <p className="text-xs font-medium mb-2 text-[#1B1818]">Additinal Information <span className="text-[#717171]">(Optional)</span></p>
                  <textarea placeholder="e.g. special notes for delivery, additional phone number" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full resize-none input-outline-purple"/>
                </div>

                <div className="flex py-6 mt-6 sm:justify-end justify-center">
                  <button className="uppercase px-20 py-2.5 bg-[#6A1B9A] hover:bg-transparent hover:text-[#6a1b9a] 
                      mt-3 rounded-custom-50 text-white text-bold border border-[#6a1b9a] w-full"
                      onClick={handleSubmit}
                  >next</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  )
}

export default Checkout