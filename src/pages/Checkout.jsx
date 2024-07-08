import Header from "../components/Header";
import Footer from "../components/Footer";
import CountryDropdown from "../components/countryDropdown";

const Checkout = () => {
  return (
    <>
      <Header />
      <section className="w-[80%] mx-auto border border-[#E0E0E0] rounded-tr-custom-10 rounded-tl-custom-10 my-5">
        <div className="py-5 px-6 border-b border-[#E0E0E0]">
          <h4 className=" font-medium text-xl">Checkout</h4>
        </div>

        <div className="h-10 border-b border-[#E0E0E0]">
          {/* stepper here */}
        </div>

        <div className="w-[90%] mx-auto lg:p-6 p-2 my-8">
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
                <input type="email" placeholder="Enter email address" className="border border-[#e0e0e0] rounded-custom-10 p-2.5 w-full input-outline-purple"/>
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

            <div className="flex py-6 mt-6 justify-end">
              <button className="uppercase px-20 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 text-white text-bold">next</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Checkout