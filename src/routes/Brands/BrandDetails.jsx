import React from "react";
import { useParams } from "react-router-dom";

import prada from './prada.webp';
import ck from './ck.png';
import loreal from './loreal.jpg';
import gucci from './gucci.jpg';
import lv from './lv.jpg';
import nike from './nike.jpg';

const BrandDetails = () => {
  const { name } = useParams();

  const brands = [
    { name: "PRADA", description: "Prada is an iconic luxury fashion house known for its handbags, shoes, and accessories. Founded in 1913 by Mario Prada, it is one of the leading brands in the global fashion industry.", logo: prada, votes: 4.7, totalVotes: 160 },
    { name: "LOREAL PARIS", description: "L'Oréal Paris is a French multinational cosmetics and beauty company founded in 1909. It is known for its skincare, haircare, make-up, and fragrance products, being one of the largest beauty brands in the world.", logo: loreal, votes: 4.5, totalVotes: 180 },
    { name: "CALVIN KLEIN", description: "Calvin Klein is a renowned American fashion brand founded in 1968, recognized for its minimalist aesthetic and iconic collections, including fragrances, clothing, and accessories.", logo: ck, votes: 4.6, totalVotes: 200 },
    { name: "GUCCI", description: "Gucci, founded in 1921 by Guccio Gucci, is an Italian luxury fashion brand known for its leather goods, clothing, and accessories. It’s one of the world's most valuable and recognized brands.", logo: gucci, votes: 4.8, totalVotes: 250 },
    { name: "NIKE", description: "Nike is an American multinational corporation that designs, manufactures, and sells sportswear, footwear, and equipment. Founded in 1964 by Bill Bowerman and Phil Knight, it is the largest supplier of athletic shoes in the world.", logo: nike, votes: 4.9, totalVotes: 300 },
    { name: "LOUIS VUITTON", description: "Louis Vuitton is a French luxury fashion house founded in 1854. It is best known for its high-end handbags, luggage, and fashion accessories. Louis Vuitton is one of the most valuable luxury brands globally.", logo: lv, votes: 4.7, totalVotes: 220 },
  ];

  const selectedBrand = brands.find((brand) => brand.name === name);

  if (!selectedBrand) {
    return <div className="flex justify-center items-center h-screen text-red-500 text-lg">Brand not found!</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white min-h-screen px-4 py-8 md:px-16">
      <h2 className="text-lg md:text-2xl font-semibold text-[#2D2D2D] mb-6 text-center">
        <span className="border-l-4 border-[#A3FE00] pl-2">{selectedBrand.name}</span>
      </h2>

      <div className="bg-white shadow-md border border-[#A3FE00] rounded-md p-6 flex flex-col items-center max-w-xs w-full mx-auto md:max-w-md md:p-8">
        <img
          src={selectedBrand.logo}
          alt={selectedBrand.name}
          className="h-24 md:h-32 mb-4 object-contain"
        />
        <h3 className="text-base md:text-lg font-semibold text-[#2D2D2D] mb-4">{selectedBrand.name}</h3>
        <p className="text-xs md:text-sm text-[#2D2D2D] text-center">{selectedBrand.description}</p>
      </div>

      <div className="text-center mt-6 px-4 md:px-0">
        <p className="text-[#2D2D2D] font-semibold text-sm md:text-lg">
          User Votes: {renderStars(Math.round(selectedBrand.votes))}
        </p>
        <p className="text-[#2D2D2D] text-xs md:text-sm mt-2">
          {selectedBrand.votes} average based on {selectedBrand.totalVotes} service votes on selected orders in this category.
        </p>
      </div>
    </div>
  );
};

export default BrandDetails;
