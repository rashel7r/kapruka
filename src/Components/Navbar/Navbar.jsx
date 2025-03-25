import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './logo.png';
import { FaGift } from 'react-icons/fa';

import { 
  FaSearch, 
  FaShoppingCart, 
  FaUser, 
  FaClipboardList, 
  FaRocket, 
  FaTags, 
  FaCalendarAlt, 
  FaHeart,
  FaNetworkWired 
} from 'react-icons/fa';

function Navbar() {
  const [isHovered, setIsHovered] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 w-full bg-[#1D372E] text-white z-50 shadow-md font-poppins" style={{ height: '60px' }}>
        <div className="flex items-center justify-between px-6 h-full">
          {/* Logo */}
          <div className="flex items-center ml-6 ">
            <img src={logo} alt="Logo" className="h-[85px] w-auto" /> 
          </div>

          {/* Search bar */}
          <div className="flex flex-1 max-w-2xl mx-30 font-poppins ml-75">
            <input
              type="text"
              placeholder="SEARCH THE ENTIRE STORE..."
              className="w-[400px] px-4 py-2 text-[#000000] text-[13px] rounded-l-md outline-none bg-[#FFFFFF] font-poppins"
            />
            <button className="bg-[#5CAF90] p-2 w-9 rounded-r-md">
              <FaSearch className="text-[#FFFFFF]" />
            </button>
          </div>

          <Link to="/cart"> 
            <div className="p-2 border-2 border-white rounded-full bg-white text-[#1D372E] mr-2">
              <FaShoppingCart className="text-[15px] cursor-pointer" title="Cart" />
            </div>
          </Link>

          <Link to="/orders"> 
            <div className="p-2 border-2 border-white rounded-full bg-white text-[#1D372E] mr-2">
              <FaClipboardList 
                className="text-[15px] cursor-pointer" 
                title="Track Orders" 
              />
            </div>
          </Link>

          <Link to="/profile"> 
            <div className="p-2 border-2 border-white rounded-full bg-white text-[#1D372E]">
              <FaUser className="text-[15px] cursor-pointer" title="Me" />
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#F4F4F4] text-[#000000] px-6 py-2 flex items-center space-x-24 text-sm overflow-x-auto mt-[60px] font-poppins">
        
        <button
          className="flex items-center space-x-2 bg-[#5CAF90] text-white text-[13.33px] px-4 py-2 rounded hover:bg-[#1D372E] "
          onClick={() => setShowCategories(!showCategories)}
        >
          
          <span>All Categories</span>
          <span className="text-xm">▼</span>
        </button>

        <div
          className="flex items-center space-x-2 bg-[#5CAF90] text-white text-[13.33px] px-4 py-2 rounded-[24px] hover:bg-[#1D372E] "
          onMouseEnter={() => setIsHovered('offers')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <span className="text-[13.33px] text-white"><FaGift /></span>
          <span className="text-[13.33px]">Seasonal Offers</span>
        </div>

        <Link to="/rush-delivery"> 
          <a
            className="flex items-center space-x-2 "
            onMouseEnter={() => setIsHovered('rush')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
            <FaRocket /></div>
            <span className="text-[13.33px]">Rush delivery</span>
          </a>
        </Link>

        <Link to="/sale"> 
          <a
            className="flex items-center space-x-2"
            onMouseEnter={() => setIsHovered('sale')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
            <FaTags /></div>
            <span className="text-[13.33px]">On Sale</span>
          </a>
        </Link>

        <Link to="/events"> 
          <a
            className="flex items-center space-x-2"
            onMouseEnter={() => setIsHovered('events')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
            <FaCalendarAlt /></div>
            <span className="text-[13.33px]">Events</span>
          </a>
        </Link>

        <Link to="/brands"> 
          <a
            className="flex items-center space-x-2"
            onMouseEnter={() => setIsHovered('brands')}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
            <FaNetworkWired /></div>
            <span className="text-[13.33px]">Brands</span>
          </a>
        </Link>

       <Link to="/foryou">
         <a
           className="flex items-center space-x-2"
           onMouseEnter={() => setIsHovered('foryou')}
           onMouseLeave={() => setIsHovered(null)}
        >
          <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
           <FaHeart />
          </div>
          <span className="text-[13.33px]">For You</span>
          </a>
          </Link>

      </div>

     
     
      
    </>
  );
}

export default Navbar;
