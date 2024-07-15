import { useState, useEffect, useContext } from 'react';
import RatingStar from "../components/RatingStars";
import Loader from "../components/Loader";
import hero1 from "../assets/firsthero.svg";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Dropdown from '../components/Dropdown';
import Sidebar from "../components/Sidebar";
import menuIcon from "../assets/hamburger.svg";
import SideFilter from '../components/SideFilter';
import axios from 'axios';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  // const handleAddToCart = (item) => {
  //   addToCart(item);
  //   alert("added from productlist page");
  // }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          params: {
            organization_id: import.meta.env.VITE_REACT_APP_ORGANIZATION_ID,
            reverse_sort: false,
            page: 1,
            size: 34,
            Appid: import.meta.env.VITE_REACT_APP_APPID,
            Apikey: import.meta.env.VITE_REACT_APP_API_KEY
          }
        });
        const fetchedItems = response.data.items.map(item => {
          const { name, id, photos, current_price } = item;
          const fallBackImage = "https://images.unsplash.com/photo-1604506272685-a999a4d122e7?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D";
          const baseURL = 'https://api.timbu.cloud/images/';
          const photoUrl = photos?.[0]?.url ? `${baseURL}${photos[0].url}` : fallBackImage;
          const price = current_price?.[0]?.NGN?.[0] || '666';

          return { name, photoUrl, price, id };
        });
        setItems(fetchedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  if (loading) return <Loader />;
  if (error) return <p>Error fetching products, please try again!</p>;

  return (
    <>
      <section className="max:h-[330px] w-[90%] mx-auto my-[15px]">
        <img src={hero1} alt="first hero img" className="h-full w-full object-cover" loading="lazy"/>
      </section>
      <section className="mt-[30px] w-[90%] mx-auto flex gap-3 items-start justify-between pb-4 min-h-screen">
        <div className="top-0 left-0 sm:min-w-[25%] hidden sm:block">
          <Sidebar />
        </div>
        <div className="sm:w-[72%] w-[100%] z-1 font-general-sans">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center border border-[#E0E0E0] py-3 px-6 bg-white shadow-sm rounded-custom-10 sm:w-[50%] w-[80%]">
              <FiSearch className="text-[#717171] mr-2"/>
              <input 
                type="search"
                placeholder="Search for anything..." 
                className="flex-grow outline-none bg-transparent text-[#717171] text-sm w-full"
              />
            </div>
            <div className="items-center gap-2 hidden sm:flex">
              <p className="text-sm font-normal text-[#1b1818]">Sort by :</p>
              <Dropdown />
            </div>
            <div className="border cursor-pointer p-2.5 rounded-custom-10 sm:hidden block">
              <img src={menuIcon} alt="menu-toggle icon" onClick={handleOpenModal}/>
            </div>
          </div>
          <div className="w-full grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-4">
            {currentItems.map((item, index) => (
              <div key={index} className="group border border-[#E0E0E0] rounded-custom-10 p-4 hover:shadow-lg cursor-pointer">
                <div className='sm:block hidden'>
                  <div className="relative w-full">
                    <div className="w-full h-[250px]">
                      <img src={item.photoUrl} alt={item.name} className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div className="absolute sm:flex items-center justify-center gap-2 w-full h-full left-0 top-0 bg-black bg-opacity-30 opacity-0 transition-opacity group-hover:opacity-100 hidden">
                      <div className="w-[40px] h-[40px] bg-[#FFF] text-[#1B1818] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6A1B9A] hover:text-white">
                        <MdOutlineFavoriteBorder className="text-xl" />
                      </div>
                      <div className="w-[40px] h-[40px] bg-[#FFF] text-[#1B1818] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6A1B9A] hover:text-white"
                        onClick={() => addToCart(item)}
                      >
                        <IoCartOutline className="text-xl" />
                      </div>
                      <Link to={`/product/${item.id}`}>
                        <div className="w-[40px] h-[40px] bg-[#FFF] text-[#1B1818] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6A1B9A] hover:text-white">
                          <IoEyeOutline className="text-xl"/>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6">
                    <RatingStar rating={4} />
                    <h4 className="font-medium text-[#1B1B1B] text-sm my-[8px] leading-5">{item.name}</h4>
                    <p className="text-[#6A1B9A] font-semibold text-sm">NGN {item.price}</p>
                  </div>
                </div>
                <div className='block sm:hidden'>
                  <Link to={`/product/${item.id}`}>
                    <div className="w-full h-[250px]">
                      <img src={item.photoUrl} alt={item.name} className="w-full h-full object-cover" loading="lazy"/>
                    </div>
                    <div className="mt-6">
                      <RatingStar rating={4} />
                      <h4 className="font-medium text-[#1B1B1B] text-sm my-[8px] leading-5">{item.name}</h4>
                      <p className="text-[#6A1B9A] font-semibold text-sm">NGN {item.price}</p>
                    </div>
                  </Link>
                  <div className="flex flex-col">
                    <button 
                      className="uppercase px-6 py-2.5 bg-[#6A1B9A] mt-3 rounded-custom-50 text-white text-bold" 
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button className="uppercase px-6 py-2.5 bg-white border border-[#6A1B9A] mt-3 rounded-custom-50 text-[#6A1B9A] text-bold">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <ReactPaginate
              previousLabel={' < '}
              nextLabel={' > '}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'flex justify-center my-4'}
              pageClassName={'mx-1'}
              pageLinkClassName={'px-4 py-2 border border-[#e0e0e0] text-[#e0e0e0] rounded-custom-10 hover:bg-[#6a1b9a] hover:text-white'}
              previousClassName={'mx-1'}
              previousLinkClassName={'px-4 py-2 border border-[#e0e0e0] text-[#e0e0e0] rounded-custom-10 hover:border-[#6a1b9a]'}
              nextClassName={'mx-1'}
              nextLinkClassName={'px-4 py-2 border border-[#e0e0e0] text-[#e0e0e0] rounded-custom-10 hover:border-[#6a1b9a]'}
              activeClassName={'bg-[#6a1b9a] text-white'}
            />
          </div>
        </div>
        <SideFilter isOpen={isModalOpen} onClose={handleCloseModal} />
      </section>
    </>
  );
};

export default ProductList;