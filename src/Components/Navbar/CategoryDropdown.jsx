import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom"; 
import flower from './flower.webp';

export default function CategoryDropdown() {
  const [showCategories, setShowCategories] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const buttonRef = useRef(null); 
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 

  const categories = [
    { 
      name: "Cakes", 
      image: flower,  
      subcategories: [
        { name: "Birthday Cakes", image: flower },
        { name: "Wedding Cakes", image: flower },
        { name: "Cupcakes", image: flower }
      ]
    },
    { 
      name: "Chocolates", 
      image: flower, 
      subcategories: [
        { name: "Dark Chocolate", image: flower },
        { name: "Milk Chocolate", image: flower },
        { name: "White Chocolate", image: flower }
      ]
    },
    { 
      name: "Cookies", 
      image: flower, 
      subcategories: [
        { name: "Chocolate Chip", image: flower },
        { name: "Oatmeal Raisin", image: flower },
        { name: "Chocolate Chip", image: flower },
        { name: "Oatmeal Raisin", image: flower },
        { name: "Sugar Cookies", image: flower }
      ]
    },
    { 
      name: "Brownies", 
      image: flower, 
      subcategories: [
        { name: "Fudge Brownies", image: flower },
        { name: "Blondies", image: flower },
        { name: "Cheesecake Brownies", image: flower }
      ]
    }
  ];

  const updatePosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: rect.bottom + window.scrollY, 
        left: rect.left + window.scrollX, 
      });
    }
  }, []);
  
  useEffect(() => {
    if (showCategories) {
      updatePosition();
    }
  }, [showCategories, updatePosition]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
    };

    if (showCategories) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategories]);

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null); 
    } else {
      setSelectedCategory(categoryName); 
    }
  };

  const handleSubcategoryClick = (subcategoryName) => {
    navigate(`/subcategory/${subcategoryName.toLowerCase().replace(/\s+/g, '-')}`);
    setShowCategories(false); 
  };

  return (
    <div className="relative font-poppins">
      <button
        ref={buttonRef}
        onClick={() => setShowCategories(!showCategories)}
        className="flex items-center space-x-2 bg-[#5CAF90] text-white text-[13.33px] px-4 py-2 rounded "
      >
        <span>All Categories</span>
        <span className="text-[13.33px]">▼</span>
      </button>

      {showCategories &&
        createPortal(
          <div
            ref={dropdownRef}
            className="absolute flex w-96 z-10"
            style={{
              top: `${buttonPosition.top + 8}px`, 
              left: `${buttonPosition.left}px`,
            }}
          >
            {/* Categories List */}
            <div className="w-2/3 bg-[#EAFFF7] text-black pr-[10px] mr-4">
              <ul className="text-black">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="px-4 py-2 cursor-pointer"
                  >
                    <div 
                      className="flex items-center space-x-2 text-[13.33px]"
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      <img
                        src={category.image}  
                        alt={category.name}
                        className="w-6 h-6 rounded-full "
                      />
                      <span>{category.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {selectedCategory && (
              <div className="w-2/3 pl-2 pt-4 pb-4 bg-[#F7FDFF]">
                <div>
                  <h3 className="text-[16px] font-semibold mb-0 font-[#1D372E]">
                    {selectedCategory}
                  </h3>
                  <ul className="text-[13.3px] text-black">
                    {categories
                      .find((category) => category.name === selectedCategory)
                      ?.subcategories.map((subcategory, index) => (
                        <li
                          key={index}
                          className="px-4 py-1 cursor-pointer"
                          onClick={() => handleSubcategoryClick(subcategory.name)}
                        >
                          <div className="flex items-center space-x-2">
                            <img
                              src={subcategory.image}  
                              alt={subcategory.name}
                              className="w-6 h-6 rounded-full"
                            />
                            <span>{subcategory.name}</span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>,
          document.body 
        )}
    </div>
  );
}
