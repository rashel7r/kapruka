import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import CategoryDropdown from '../Navbar/CategoryDropdown';
import logo from './logo.png';
import { 
  FaSearch, 
  FaShoppingCart, 
  FaUser, 
  FaClipboardList, 
  FaRocket, 
  FaTags, 
  FaCalendarAlt, 
  FaHeart,
  FaNetworkWired, 
  FaGift
} from 'react-icons/fa';

function Navbar() {
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
            <motion.div 
              whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
              className="p-2 border-2 border-white rounded-full bg-white text-[#1D372E] mr-2">
              <FaShoppingCart className="text-[15px] cursor-pointer" title="Cart" />
            </motion.div>
          </Link>

          <Link to="/orders"> 
            <motion.div 
              whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
              className="p-2 border-2 border-white rounded-full bg-white text-[#1D372E] mr-2">
              <FaClipboardList className="text-[15px] cursor-pointer" title="Track Orders" />
            </motion.div>
          </Link>

          <Link to="/profile"> 
            <motion.div 
              whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}
              className="p-2 border-2 border-white rounded-full bg-white text-[#1D372E]">
              <FaUser className="text-[15px] cursor-pointer" title="Me" />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#F4F4F4] text-[#000000] px-6 py-2 flex items-center space-x-24 text-sm overflow-x-auto mt-[60px] font-poppins">
        <CategoryDropdown />
        

        {/* Seasonal Offers - Always Dancing (Wiggling Left & Right) */}
        <div className="flex items-center space-x-2 bg-[#5CAF90] text-white text-[13.33px] px-4 py-2 rounded-[24px] hover:bg-[#1D372E]">
          <motion.span animate={{ rotate: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}>
            <FaGift />
          </motion.span>
          <span>Seasonal Offers</span>
        </div>

        {/* Other Icons with Pulse Effect */}
        <Link to="/rush-delivery">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
              <FaRocket />
            </div>
            <span>Rush delivery</span>
          </motion.div>
        </Link>

        <Link to="/sale">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
              <FaTags />
            </div>
            <span>On Sale</span>
          </motion.div>
        </Link>

        <Link to="/events">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
              <FaCalendarAlt />
            </div>
            <span>Events</span>
          </motion.div>
        </Link>

        <Link to="/brands">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
              <FaNetworkWired />
            </div>
            <span>Brands</span>
          </motion.div>
        </Link>

        <Link to="/foryou">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <div className="p-1 border-2 bg-[#FFFFFF] border-[#FFFFFF] center rounded-full">
              <FaHeart />
            </div>
            <span>For You</span>
          </motion.div>
        </Link>

      </div>
    </>
  );
}

export default Navbar;