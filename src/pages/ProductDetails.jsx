import { useState, useEffect, useContext } from 'react';
import RatingStars from "../components/RatingStars";
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { MdEngineering, MdPayment } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { Link, useParams } from 'react-router-dom';
import Loader from "../components/Loader";
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`, {
          params: {
            organization_id: import.meta.env.VITE_REACT_APP_ORGANIZATION_ID,
            Appid: import.meta.env.VITE_REACT_APP_APPID,
            Apikey: import.meta.env.VITE_REACT_APP_API_KEY
          }
        });
        const product = response.data;
        
        const baseURL = 'https://api.timbu.cloud/images/';
        const fallBackImage = "https://images.unsplash.com/photo-1604506272685-a999a4d122e7?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D";
        const photoUrl = product.photos?.[0]?.url ? `${baseURL}${product.photos[0].url}` : fallBackImage;
        // const price = current_price;
        
        setProduct({
          ...product,
          photoUrl,
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  if (loading) return <Loader />;
  if (error) return <p>Error fetching product details, please try again!</p>;

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <section>
        {product ? (
          <>
            <div className="sm:w-[80%] w-[90%] sm:px-5 px-2 mx-auto my-10">
              <Link to="/">
                <div className="flex items-center gap-4 justify-start cursor-pointer mb-5">
                  <FaArrowLeft />
                  <h2 className='text-lg font-medium'>Product - <span className='text-xs font-light'>{product.name}</span></h2>
                </div>
              </Link>

              <div className="flex flex-col sm:flex-row items-center justify-center w-full">
                <div className="sm:w-1/3 w-1/2 h-full aspect-w-6 aspect-h-4">
                  <img src={product.photoUrl} alt={product.name} className="w-full h-auto object-cover" />
                </div>
                
                <div className="sm:w-1/2 w-full p-4">
                  <h2 className="text-xl font-medium mb-3">{product.name}</h2>
                  <RatingStars rating={4} />
                  <p className='text-sm font-medium my-3'>NGN {product.current_price}</p>

                  <p className="text-sm font-normal text-[#717171] mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod sunt repellendus omnis 
                    praesentium quasi veritatis repudiandae similique fugit obcaecati peragni voluptates ratione dolor.
                  </p>

                  <div className="flex items-center gap-8 w-1/2 mb-5">
                    <div 
                      className="border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                      onClick={decreaseQuantity}
                    >
                      <p> - </p>
                    </div>
                    <p className="text-[#1B1818] font-normal text-sm">{quantity}</p>
                    <div 
                      className="border border-[#6a1b9a] rounded-full flex w-6 h-6 items-center text-[#6a1b9a] justify-center cursor-pointer hover:bg-[#6a1b9a] hover:text-white"
                      onClick={increaseQuantity}
                    >
                      <p> + </p>
                    </div>
                  </div>

                  <div className='flex items-center lg:flex-row flex-col justify-between mb-3 gap-5'>
                    <button 
                      className="uppercase px-5 py-2.5 bg-[#6A1B9A] hover:bg-transparent hover:text-[#6a1b9a] mt-3 rounded-custom-50 text-white text-bold border border-[#6a1b9a] lg:w-1/2 w-full"
                      onClick={() => addToCart({ ...product, quantity, price: product.current_price })}
                    >
                      Add to Cart
                    </button>

                    <button className="uppercase px-5 py-2.5 hover:bg-[#6A1B9A] bg-transparent text-[#6a1b9a] mt-3 rounded-custom-50 hover:text-white text-bold border border-[#6a1b9a] lg:w-1/2 w-full">
                      Save
                    </button>
                  </div>

                  <div className='mb-3'>
                    <div className='flex items-center gap-2 text-[#717171] mb-2'>
                      <GiWorld />
                      <p className="text-sm">Free shipping worldwide</p>
                    </div>
                    <div className='flex items-center gap-2 text-[#717171] mb-2'>
                      <MdPayment />
                      <p className="text-sm">100% secured payment</p>
                    </div>
                    <div className='flex items-center gap-2 text-[#717171] mb-2'>
                      <MdEngineering />
                      <p className="text-sm">Made by the professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </section>
    </>
  );
};

export default ProductDetails;
