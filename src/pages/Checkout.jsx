import { useState } from "react";
// import CountryDropdown from "../components/countryDropdown";
import mastercard from "../assets/mastercard.svg";
import visacard from "../assets/visacard.svg";
import amazon from "../assets/amazon.svg";
import paypal from "../assets/paypal.png";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: '#e0e0e0',
    borderRadius: '10px',
    padding: '0.25rem', // equivalent to py-3 px-2
    width: '100%',
    ':hover': {
      borderColor: '#e0e0e0',
    },
    boxShadow: 'none', // to remove the default outline
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 20,
  }),
  option: (provided, state) => ({
    ...provided,
    ':hover': {
      backgroundColor: '#f3f4f6', // Tailwind's hover:bg-gray-100
    },
    backgroundColor: state.isSelected ? '#e5e7eb' : 'white', // Tailwind's bg-gray-200 for selected
  }),
};

const Checkout = () => {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // const handleNextPage = () => {
  //   navigate("/check");
  // }

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      nameOnCard: '',
      expiryDate: '',
      cvv: '',
      paymentMethod: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Invalid card number, add spaces')
        .required('Required'),
      nameOnCard: Yup.string().required('Required'),
      expiryDate: Yup.string()
        .matches(/^\d{2}\/\d{4}$/, 'Expiry date is not valid')
        .required('Required'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'CVV is not valid')
        .required('Required'),
      paymentMethod: Yup.string().required('Please select a payment method'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      // Handle form submission
      navigate("/check");
    },
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countries = Country.getAllCountries().map(country => ({
    value: country.isoCode,
    label: country.name
  }));

  const states = selectedCountry ? State.getStatesOfCountry(selectedCountry.value).map(state => ({
    value: state.isoCode,
    label: state.name
  })) : [];

  const cities = selectedState ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map(city => ({
    value: city.name,
    label: city.name
  })) : [];

  const handleCountryChange = country => {
    setSelectedCountry(country);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = state => {
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCityChange = city => {
    setSelectedCity(city);
  };

  return (
    <>
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
                  <p className="text-sm font-medium mb-2 text-[#1B1818] hidden lg:block">MasterCard</p>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div  className="flex flex-col border-r m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer">
                  <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                    <img src={visacard} alt="visacard logo" />
                  </div>
                  <p className="text-sm font-medium mb-2 text-[#1B1818] hidden lg:block">VisaCard</p>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div  className="flex flex-col border-r m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer">
                  <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                    <img src={paypal} alt="paypal logo" />
                  </div>
                  <p className="text-sm font-medium mb-2 text-[#1B1818] hidden lg:block">PayPal</p>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div  className="flex flex-col border-r m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer">
                  <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                    <img src={amazon} alt="amazon logo" />
                  </div>
                  <p className="text-sm font-medium mb-2 text-[#1B1818] hidden lg:block">Amazon Pay</p>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mastercard"
                    className="form-radio text-[#6A1B9A]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                      name="paymentMethod"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  <div  className="flex flex-col border m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer rounded-custom-10">
                    <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                      <img src={visacard} alt="visacard logo" />
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
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
                      name="paymentMethod"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  <div  className="flex flex-col border m-auto border-[#e0e0e0] p-9 w-full items-center cursor-pointer rounded-custom-10">
                    <div className="rounded-custom-6 border border-[#e0e0e0] p-2 mb-2">
                      <img src={amazon} alt="amazon logo" />
                    </div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mastercard"
                      className="form-radio text-[#6A1B9A]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>
              {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
                <div className="text-red-500 text-sm">{formik.errors.paymentMethod}</div>
              ) : null}
              <form onSubmit={formik.handleSubmit}>
                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">Card Number</p>
                    <input 
                      type="text" 
                      name="cardNumber"
                      placeholder="0000 0000 0000 0000" 
                      className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber ? (
                      <div className="text-red-500 text-sm">{formik.errors.cardNumber}</div>
                    ) : null}
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">Name on card</p>
                    <input 
                      type="text" 
                      name="nameOnCard"
                      placeholder="Olakunle Oluremi" 
                      value={formik.values.nameOnCard}
                      className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.nameOnCard && formik.errors.nameOnCard ? (
                      <div className="text-red-500 text-sm">{formik.errors.nameOnCard}</div>
                    ) : null}
                  </div>
                </div>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">Expiry Date</p>
                    <input 
                      type="text" 
                      placeholder="12/2027" 
                      name="expiryDate"
                      className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"
                      value={formik.values.expiryDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.expiryDate && formik.errors.expiryDate ? (
                      <div className="text-red-500 text-sm">{formik.errors.expiryDate}</div>
                    ) : null}
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">CVV</p>
                    <input 
                      type="text"
                      name="cvv"
                      placeholder="000" 
                      className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.cvv && formik.errors.cvv ? (
                      <div className="text-red-500 text-sm">{formik.errors.cvv}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex py-6 mt-6 sm:justify-end justify-center">
                  {/* <button className="uppercase px-10 py-2.5 hover:bg-[#6A1B9A] bg-transparent text-[#6a1b9a] 
                    mt-3 rounded-custom-50 hover:text-white text-bold border border-[#6a1b9a] sm:w-1/3 w-full"
                    onClick={handlePrevPage}
                  >previous</button> */}

                  <button
                    className="uppercase px-10 py-2.5 bg-[#6A1B9A] hover:bg-transparent hover:text-[#6a1b9a] 
                      mt-3 rounded-custom-50 text-white text-bold border border-[#6a1b9a] sm:w-1/3 w-full"
                    // onClick={handleNextPage}
                    type="submit"
                  >
                    next
                  </button>
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
                <div className="md:w-1/2 w-full flex-col justify-start">
                  <p className="text-sm font-medium mb-2 text-[#1B1818]">Country/Region</p>
                  <Select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countries}
                    placeholder="Select Country"
                    styles={customStyles}
                  />
                </div>

                <p className="text-[#717171] uppercase font-normal text-sm my-4 mb-2.3">contact information</p>

                <div className="w-full">
                  <p className="text-sm font-medium mb-2 text-[#1B1818]">Full Name</p>
                  <input type="text" placeholder="Enter full name" className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"/>
                </div>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">Email Address</p>
                    <input type="email" placeholder="Enter email address" className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"/>
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">Phone Number</p>
                    <input type="text" placeholder="Enter phone number" className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"/>
                  </div>
                </div>

                <p className="text-[#717171] uppercase font-normal text-sm my-4">address</p>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">Address</p>
                    <input type="email" placeholder="Enter street details" className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"/>
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">State</p>
                    <Select
                      value={selectedState}
                      onChange={handleStateChange}
                      options={states}
                      placeholder="Select State"
                      isDisabled={!selectedCountry}
                      styles={customStyles}
                    />
                  </div>
                </div>

                <div className="w-full flex items-center flex-col md:flex-row justify-between mt-2.5">
                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">City</p>
                    <Select
                      value={selectedCity}
                      onChange={handleCityChange}
                      options={cities}
                      placeholder="Select City"
                      isDisabled={!selectedState}
                      styles={customStyles}
                    />
                  </div>

                  <div className="md:w-[48%] w-full mb-2">
                    <p className="text-sm font-medium mb-2 text-[#1B1818]">ZIP Code</p>
                    <input type="text" placeholder="Enter zip code" className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full input-outline-purple"/>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 mb-6">
                  <input type="checkbox" name="" id="" />
                  <p className="text-[#717171] font-normal text-base">Set as default shipping address</p>
                </div>

                <p className="text-[#717171] uppercase font-normal text-sm my-4">Additional Information</p>

                <div className="w-full">
                  <p className="text-sm font-medium mb-2 text-[#1B1818]">Additinal Information <span className="text-[#717171]">(Optional)</span></p>
                  <textarea placeholder="e.g. special notes for delivery, additional phone number" className="border border-[#e0e0e0] rounded-custom-10 py-3 px-2 w-full resize-none input-outline-purple"/>
                </div>

                <div className="flex py-6 mt-6 sm:justify-end justify-center">
                  <button className="uppercase px-20 py-2.5 bg-[#6A1B9A] hover:bg-transparent hover:text-[#6a1b9a] 
                    mt-3 rounded-custom-50 text-white text-bold border border-[#6a1b9a] sm:w-1/4 w-full"
                    onClick={handleSubmit}
                  >next</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Checkout