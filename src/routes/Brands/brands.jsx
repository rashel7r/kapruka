import React from "react";
import { Link } from "react-router-dom";  // Import Link
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
        fontFamily: "'Roboto', sans-serif",
        fontOpticalSizing: "auto",
        fontWeight: 400,
      }}
    >
      <nav className="text-[10px] text-[#2D2D2D] mb-4">
        <a href="/" className="hover:underline">Home</a> / <a href="/brands" className="hover:underline">Brands</a>
      </nav>

      <h2 className="text-[20px] font-semibold text-[#2D2D2D] mb-6">
        <span className="border-l-4 border-[#A3FE00] pl-2">
          All Brands at TechWave Solutions
        </span>
      </h2>

      {/* Responsive grid with equal sized cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {repeatedBrands.map((brand, index) => (
          <Link to={`/brand/${brand.name}`} key={index}> {/* Wrap card with Link */}
            <div
              className="bg-white shadow-md border border-gray-200 rounded-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="p-4 flex justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-16 object-contain"
                />
              </div>

              <div className="px-4 pb-4 flex-1">
                <h3 className="text-lg font-semibold text-[#2D2D2D] text-[14px] text-center mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-[#2D2D2D] text-[12px] text-center mb-4">
                  {brand.description.substring(0, 100)}...
                </p>
              </div>

              <div className="bg-gray-100 text-center py-2 text-[12px] text-[#A3FE00] font-medium rounded-b-md">
                {brand.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
