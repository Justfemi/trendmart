import {
  MdKeyboardArrowRight,
  MdOutlineDelete,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
// import PropTypes from "prop-types";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const grandTotal = subTotal - (34 + 61.99);

  // subTotal === 0 ? grandTotal = 0 : grandTotal ; 

  return (
    <>
      <section className="flex items-start w-[90%] mx-auto my-[50px] justify-between flex-col sm:flex-row">
        <div className="sm:hidden block mx-auto">
          <div className="flex items-center gap-2 p-4">
            <h3 className="text-[#1b1818] font-medium text-base">
              Shopping cart{" "}
            </h3>
            <div className="bg-[#6a1b9a] text-white rounded-full px-2 py-1">
              {cart.length}
            </div>
          </div>

          <div className="flex flex-col ">
            {cart.length === 0 ? (
              <div className="flex items-center justify-center flex-col"> 
                <p className="mt-2 ml-3">Your cart is empty.</p>
                <Link to="/">
                  <button
                    className="uppercase px-5 py-2 bg-[#6A1B9A] my-3 rounded-custom-50 border border-transparent
                    text-white text-bold hover:text-[#6a1b9a] hover:bg-white hover:border-[#6a1b9a]"
                  >
                    start shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 py-2 px-1 border-[#e0e0e0] border-t">
                    <MdOutlineDelete className="text-[30px] text-red-600 cursor-pointer" onClick={() => removeFromCart(item.id)} />
                    <div className="w-[80px] h-[80px] border border-[#e0e0e0] rounded-custom-6">
                      <img
                        src={item.photoUrl}
                        loading="lazy"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-[#1b1818] font-medium text-sm mb-3">
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-between">
                        <h3 className="text-[#1b1818] font-medium text-sm">$250</h3>
                        <div className="flex items-center gap-5">
                          <div
                            className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <p> - </p>
                          </div>
                          <p className="text-[#1B1818] font-normal text-sm">{item.quantity}</p>
                          <div
                            className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <p> + </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="border border-[#e0e0e0] rounded-custom-10 basis-[64%] hidden sm:block">
          <div className="flex items-center gap-2 p-4">
            <h3 className="text-[#1b1818] font-medium text-base">
              Shopping cart{" "}
            </h3>
            <div className="bg-[#6a1b9a] text-white rounded-full px-2 py-1">
              {cart.length}
            </div>
          </div>

          <div className="w-full py-3 px-6 bg-[#E0E0E0] border border-[#E0E0E0] flex items-center justify-between">
            <p className="text-[#717171] text-xs font-medium uppercase basis-[45%]">
              Products
            </p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">
              Price
            </p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">
              Quantity
            </p>

            <p className="text-[#717171] text-xs font-medium uppercase basis-[15%]">
              sub total
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="flex items-center justify-center flex-col"> 
              <p className="mt-2 ml-3">Your cart is empty.</p>
              <Link to="/">
                <button
                  className="uppercase px-5 py-2 bg-[#6A1B9A] my-3 rounded-custom-50 border border-transparent
                  text-white text-bold hover:text-[#6a1b9a] hover:bg-white hover:border-[#6a1b9a]"
                >
                  start shopping
                </button>
              </Link>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex w-full items-center justify-between border-b border-[#E0E0E0] p-3">
                  <div className="flex items-center basis-[40%] gap-2">
                    <MdOutlineDelete className="text-[30px] text-red-600 cursor-pointer" onClick={() => removeFromCart(item.id)}/>
                    <div className="w-[80px] h-[80px] border border-[#E0E0E0] rounded-custom-6">
                      <img
                        src={item.photoUrl}
                        loading="lazy"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[#1B1818] font-medium text-sm">
                      {item.name}
                    </p>
                  </div>
      
                  <p className="text-[#1B1818] font-medium text-sm basis-[5%]">
                    {item.price}
                  </p>
      
                  <div className="basis-[16%]">
                    <div className="flex items-center justify-around">
                      <div
                        className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <p> - </p>
                      </div>
                      <p className="text-[#1B1818] font-normal text-sm">{item.quantity}</p>
                      <div
                        className=" border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <p> + </p>
                      </div>
                    </div>
                  </div>
      
                  <p className="text-[#1B1818] font-medium text-sm basis-[16%]">
                  {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="sm:basis-[34%] basis-full mx-auto">
          <div className="border border-[#e0e0e0] rounded-custom-10 p-5 w-full">
            <h3 className="text-[#1b1818] font-medium text-base">Cart Total</h3>

            <div className="flex items-center justify-between py-2">
              <p className="text-[#717171] font-normal text-sm">Sub-total</p>
              <h3 className="text-[#1b1818] font-medium text-sm">#{subTotal.toFixed(2)}</h3>
            </div>

            <div className="flex items-center justify-between py-2">
              <p className="text-[#717171] font-normal text-sm">Shipping</p>
              <h3 className="text-[#1b1818] font-medium text-sm">Free</h3>
            </div>

            <div className="flex items-center justify-between py-2">
              <p className="text-[#717171] font-normal text-sm">Discount</p>
              <h3 className="text-[#1b1818] font-medium text-sm">#34</h3>
            </div>

            <div className="flex items-center justify-between py-2">
              <p className="text-[#717171] font-normal text-sm">Tax</p>
              <h3 className="text-[#1b1818] font-medium text-sm">#61.99</h3>
            </div>

            <div className="flex items-center justify-between py-2 border-t border-[#e0e0e0]">
              <p>Total</p>
              <h3 className="text-[#1b1818] font-medium text-base">
                NGN {grandTotal.toFixed(2)}
              </h3>
            </div>

            <button
              className={`uppercase flex justify-center items-center gap-3 px-6 py-2.5 mt-3 rounded-custom-50 
                text-bold w-full transition-colors duration-300 ${
                  cart.length === 0
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-[#6A1B9A] text-white border border-transparent hover:text-[#6a1b9a] hover:bg-white hover:border-[#6a1b9a]'
                }`}
              onClick={handleGoToCheckout}
              disabled={cart.length === 0}
            >
              proceed to checkout
              <MdKeyboardArrowRight />
            </button>

            <button
              className="uppercase px-6 flex justify-center items-center gap-3 py-2.5 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] text-bold w-full hover:bg-[#6a1b9a] hover:text-white"
              onClick={handleGoToHome}
            >
              <MdKeyboardArrowLeft />
              continue shopping
            </button>
          </div>

          <div className="border border-[#e0e0e0] rounded-custom-10 mt-5 w-full">
            <div className="border-b border-[#e0e0e0] p-5">
              <h3 className="text-[#1b1818] font-medium text-base">
                Coupon Code
              </h3>
            </div>

            <div className="p-5">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="border border-[#e0e0e0] px-4 py-3 w-full rounded-custom-10"
              />
              <button className="uppercase px-6 py-2.5 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] text-bold w-full hover:bg-[#6a1b9a] hover:text-white">
                apply coupon
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Cart.propTypes = {
  // id: PropTypes.number.isRequired,
// };

export default Cart;
