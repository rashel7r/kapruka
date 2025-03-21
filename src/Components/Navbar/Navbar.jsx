import React, { useState } from 'react';
import offer from './offer.jpg';
import events from './events.jpg';
import delivery from './delivery.webp';
import sale from './sale.jpg';
import brands from './brand.jpg';
import foryou from './foryou.jpg';
import { 
  FaSearch, 
  FaShoppingCart, 
  FaUser, 
  FaRocket, 
  FaTags, 
  FaCalendarAlt, 
  FaHeart,
  FaNetworkWired 
} from 'react-icons/fa';

function Navbar() {
  const [isHovered, setIsHovered] = useState(null); // Manage different hover states

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 w-full bg-[#2D2D2D] text-white z-50 shadow-md font-roboto">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-white">E-</span>
              <span className="text-[#A3FE00]">COMMERCE</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex flex-1 max-w-2xl mx-6">
            <input
              type="text"
              placeholder="SEARCH THE ENTIRE STORE..."
              className="w-full px-4 py-2 text-[#2D2D2D] text-xs rounded-l-md outline-none bg-white font-roboto"
            />
            <button className="bg-[#A3FE00] p-3 rounded-r-md">
              <FaSearch className="text-black" />
            </button>
          </div>
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <FaUser className="text-2xl cursor-pointer" />
        </div>
      </div>
   
      {/* Bottom bar */}
      <div className="bg-gray-100 text-gray-800 px-6 py-2 flex items-center space-x-24 text-sm overflow-x-auto mt-[60px] font-roboto">
        {/* All Categories Button */}
        <button
          className="flex items-center space-x-2 bg-[#2D2D2D] text-white text-xs px-4 py-2 rounded hover:bg-[#000000]"
          onMouseEnter={() => setIsHovered('categories')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <span className="text-xm">☰</span>
          <span>All Categories</span>
        </button>

        {/* Seasonal Offers Button */}
        <div
          className="flex items-center space-x-2"
          onMouseEnter={() => setIsHovered('offers')} 
          onMouseLeave={() => setIsHovered(null)}
        >
          <span role="img" aria-label="party" className="text-xs">🎁</span>
          <span className="text-xs">Seasonal Offers</span>
        </div>

        {/* Rush Delivery */}
        <a
          href="#"
          className="flex items-center space-x-2 "
          onMouseEnter={() => setIsHovered('rush')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <FaRocket />
          <span className="text-xs">Rush delivery</span>
        </a>

        {/* On Sale */}
        <a
          href="#"
          className="flex items-center space-x-2 "
          onMouseEnter={() => setIsHovered('sale')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <FaTags />
          <span className="text-xs">On Sale</span>
        </a>

        {/* Events */}
        <a
          href="#"
          className="flex items-center space-x-2 "
          onMouseEnter={() => setIsHovered('events')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <FaCalendarAlt />
          <span className="text-xs">Events</span>
        </a>

        {/* Brands */}
        <a
          href="/brands"
          className="flex items-center space-x-2 "
          onMouseEnter={() => setIsHovered('brands')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <FaNetworkWired />
          <span className="text-xs">Brands</span>
        </a>

        {/* For You */}
        <a
          href="#"
          className="flex items-center space-x-2 "
          onMouseEnter={() => setIsHovered('foryou')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <FaHeart />
          <span className="text-xs">For You</span>
        </a>
      </div>

      {/* Images below the navbar, appears only when hover */}
      {isHovered === 'offers' && (
        <div className="absolute top-[100px] left-[-300px] w-full">
          <img 
            src={offer} 
            alt="Seasonal Offers"
            className="w-50 h-[250px] mx-auto border-8 border-white"  
          />
        </div>
      )}

      {isHovered === 'rush' && (
        <div className="absolute top-[100px] left-[-115px] w-full">
          <img 
            src={delivery} 
            alt="Rush Delivery"
            className="w-35 h-[200px] mx-auto border-8 border-white"
          />
        </div>
      )}

      {isHovered === 'sale' && (
        <div className="absolute top-[100px] left-[60px] w-full">
          <img 
            src={sale} 
            alt="On Sale"
            className="w-35 h-[200px] mx-auto border-8 border-white"
          />
        </div>
      )}

      {isHovered === 'events' && (
        <div className="absolute top-[100px] left-[215px] w-full">
          <img 
            src={events} 
            alt="Events"
            className="w-35 h-[200px] mx-auto border-8 border-white"
          />
        </div>
      )}

     {isHovered === 'brands' && (
        <div className="absolute top-[100px] left-[368px] w-full">
          <img 
            src={brands} 
            alt="Brands"
            className="w-35 h-[200px] mx-auto border-8 border-white"
          />
        </div>
      )}

      {isHovered === 'foryou' && (
        <div className="absolute top-[100px] left-[527px] w-full">
          <img 
            src={foryou} 
            alt="For You"
            className="w-35 h-[200px] mx-auto border-8 border-white"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
