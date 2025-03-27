import React from "react";
import { FaSearch } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./Products";
import Map from "../assets/map.png";

const OrderTracking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="text-center py-8">Loading...</div>;

  const currentVariant = product.variants[0];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center">
          Order <span className="text-[#5CAF90]">Tracking</span>
        </h2>
        <div className="flex justify-center gap-2 mt-4">
          <input
            type="text"
            className="border border-[#E8E8E8] bg-gray-50 p-2 rounded-lg w-80 focus:outline-none text-center"
            placeholder="Search Using Tracking Code"
          />
          <button className="bg-[#5CAF90] text-white p-3 rounded-lg cursor-pointer">
            <FaSearch />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left Section - Order Details */}
          <div className="bg-gray-50 p-6 rounded-lg shadow border border-[#E8E8E8] flex flex-col ">
            <h3 className="text-lg font-semibold text-center">
              Order <span className="text-[#5CAF90]">Details</span>
            </h3>
            <div className="mt-4 space-y-4 border rounded-lg border-gray-200 ">
              <div
                className="flex items-center space-x-4 bg-gray-100 rounded-lg p-3 cursor-pointer"
                onClick={() => navigate(`/product-page/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt="Product"
                  className="w-20 h-20 rounded object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">{product.name}</p>
                  <div className="mt-2 space-y-1">
                    {currentVariant.size && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Size:</span>{" "}
                        {currentVariant.size[0]}
                      </p>
                    )}
                    {currentVariant.colorName && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Color:</span>{" "}
                        {currentVariant.colorName}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-black font-semibold">
                      {currentVariant.price.toFixed(2)} LKR
                    </p>
                    {product.marketPrice > currentVariant.price && (
                      <p className="text-gray-500 line-through text-sm">
                        {product.marketPrice.toFixed(2)} LKR
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Order info box */}
            <div className="mt-4 bg-gray-100 border rounded-lg border-gray-200 p-4">
              <p className="text-gray-700">
                <strong>Order No:</strong> #{id}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Delivery Date:</strong> 2025/01/24
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Address:</strong> 106/A, Piliyandala, Moratuwa
              </p>
            </div>
          </div>

          {/* Center Section - Map */}
          <div className="bg-gray-50 p-6 rounded-lg shadow border border-[#E8E8E8] flex flex-col">
            <h3 className="text-lg font-semibold text-center mb-4">
              Delivery <span className="text-[#5CAF90]">Location</span>
            </h3>
            <div className="flex-grow border rounded-lg border-gray-200 overflow-hidden">
              <img
                src={Map}
                alt="Map"
                className="w-full h-full object-cover bg-white"
              />
            </div>
          </div>

          {/* Right Section - Tracking Status */}
          <div className="bg-gray-50 p-6 rounded-lg shadow border border-[#E8E8E8] flex flex-col">
            <h3 className="text-lg font-semibold text-center">
              Order <span className="text-[#5CAF90]">Status</span>
            </h3>

            {/* Status Timeline */}
            <div className="relative mt-4 flex-grow">
              {/* Vertical line */}
              <div className="absolute left-[14px] top-0 h-full w-0.5 bg-gray-300"></div>

              {/* Status Items */}
              <ul className="space-y-4 pl-5">
                {[
                  {
                    id: 1,
                    status: "Order Confirmed",
                    completed: true,
                    active: false,
                    date: "2025/01/20 10:30 AM",
                  },
                  {
                    id: 2,
                    status: "Order Packed",
                    completed: true,
                    active: false,
                    date: "2025/01/21 02:15 PM",
                  },
                  {
                    id: 3,
                    status: "Awaiting Delivery",
                    completed: true,
                    active: false,
                    date: "2025/01/22 09:45 AM",
                  },
                  {
                    id: 4,
                    status: "Out for Delivery",
                    completed: true,
                    active: false,
                    date: "Expected by 2025/01/24",
                  },
                  {
                    id: 5,
                    status: "Delivered",
                    completed: true,
                    active: true,
                    date: null,
                  },
                ].map((item) => (
                  <li
                    key={item.id}
                    className="relative flex items-center gap-2"
                  >
                    {/* Status dot */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-4 flex-shrink-0
              ${
                item.active
                  ? "border-[#5CAF90] bg-white animate-pulse"
                  : item.completed
                  ? "bg-[#5CAF90] border-[#5CAF90]"
                  : "bg-white border-gray-300"
              }`}
                    ></div>

                    {/* Status content */}
                    <div
                      className={`p-2 w-full transition-all duration-200 ${
                        item.active
                          ? "bg-[#5CAF90]/10 border border-[#5CAF90] rounded-md"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-sm font-medium ${
                            item.completed
                              ? "text-[#5CAF90]"
                              : item.active
                              ? "text-[#5CAF90]"
                              : "text-gray-500"
                          }`}
                        >
                          {item.status}
                        </span>
                        {item.completed && (
                          <span className="text-xs text-gray-500">✓</span>
                        )}
                      </div>
                      {item.date && (
                        <p className="text-xs mt-0.5 text-gray-500">
                          {item.date}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Estimate */}
            <div className="mt-4 p-3 bg-gray-100 rounded-md border border-[#E8E8E8]">
              <div className="flex items-center">
                <div className="bg-[#5CAF90]/10 p-1.5 rounded-full mr-2">
                  <svg
                    className="w-4 h-4 text-[#5CAF90]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Estimated Delivery</p>
                  <p className="text-xs text-gray-600">
                    Friday, January 24, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
