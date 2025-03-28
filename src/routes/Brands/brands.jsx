import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// Images
import prada from './prada.webp';
import ck from './ck.png';
import loreal from './loreal.jpg';
import gucci from './gucci.jpg';
import lv from './lv.jpg';
import nike from './nike.jpg';

const Brands = () => {
  const brands = [
    {
      name: "PRADA",
      description:
        "Prada is an iconic luxury fashion house known for its handbags, shoes, and accessories. Founded in 1913 by Mario Prada, it is one of the leading brands in the global fashion industry.",
      logo: prada,
    },
    {
      name: "LOREAL PARIS",
      description:
        "L'Oréal Paris is a French multinational cosmetics and beauty company founded in 1909. It is known for its skincare, haircare, make-up, and fragrance products, being one of the largest beauty brands in the world.",
      logo: loreal,
    },
    {
      name: "CALVIN KLEIN",
      description:
        "Calvin Klein is a renowned American fashion brand founded in 1968, recognized for its minimalist aesthetic and iconic collections, including fragrances, clothing, and accessories.",
      logo: ck,
    },
    {
      name: "GUCCI",
      description:
        "Gucci, founded in 1921 by Guccio Gucci, is an Italian luxury fashion brand known for its leather goods, clothing, and accessories. It’s one of the world's most valuable and recognized brands.",
      logo: gucci,
    },
    {
      name: "NIKE",
      description:
        "Nike is an American multinational corporation that designs, manufactures, and sells sportswear, footwear, and equipment. Founded in 1964 by Bill Bowerman and Phil Knight, it is the largest supplier of athletic shoes in the world.",
      logo: nike,
    },
    {
      name: "LOUIS VUITTON",
      description:
        "Louis Vuitton is a French luxury fashion house founded in 1854. It is best known for its high-end handbags, luggage, and fashion accessories. Louis Vuitton is one of the most valuable luxury brands globally.",
      logo: lv,
    },
  ];

  // Repeat the first row brands for the second row
  const repeatedBrands = [...brands, ...brands];

  return (
    <div
      className="bg-white min-h-screen p-8"
      style={{
        fontFamily: "'Poppins', sans-serif", // Applying Poppins font here
      }}
    >
      {/* Breadcrumb Navigation */}
      <nav className="text-[10px] text-[#2D2D2D] mb-4">
        <a href="/" className="hover:underline">Home</a> / <a href="/brands" className="hover:underline">Brands</a>
      </nav>

      {/* Heading */}
      <h2 className="text-[39.81px] font-semibold text-[#2D2D2D] mb-6 text-center">
        <span className="text-[#1D372E]">Brands at </span>
        <span className="text-[#5CAF90]">Asipiya</span>
      </h2>

      {/* Search bar */}
      <div className="flex justify-center mb-6 ml-55">
        <div className="flex flex-1 max-w-full sm:max-w-2xl px-4">
          <input
            type="text"
            placeholder="SEARCH BRANDS"
            className="w-full sm:w-[400px] px-4 py-2 text-[#000000] text-[13px] rounded-l-md outline-none bg-[#FFFFFF] font-poppins border border-[#E8E8E8]" // Added responsiveness
          />
          <button className="bg-[#5CAF90] p-2 w-9 rounded-r-md">
            <FaSearch className="text-[#FFFFFF]" />
          </button>
        </div>
      </div>

      <br />

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {repeatedBrands.map((brand, index) => (
          <Link to={`/brand/${brand.name}`} key={index}>
            <div className="bg-white border border-[#E8E8E8] rounded-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 h-full">
              
              {/* Brand Logo */}
              <div className="p-4 flex justify-center">
                <img
                 src={brand.logo}
                 alt={brand.name}
                 className="h-16 width object-contain border-1 border-[#E8E8E8] "
                />
              </div>

              {/* Brand Name & Description */}
              <div className="px-2 pb-1 flex-1 flex flex-col">
                <h3 className="text-[16px] font-semibold text-[#1D372E] text-center mb-2">
                  {brand.name}
                </h3>
                <p className="text-[13.33px] text-[#5E5E5E] text-center mb-4 flex-grow">
                  {brand.description.substring(0, 100)}...
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
