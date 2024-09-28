import { CgMenuGridR, CgLayoutList } from "react-icons/cg";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardGrid from "./ProductCardGrid";
import { sortProducts } from "../utils/sortProducts";

function ShopProducts() {
  const [isGridView, setIsGridView] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Featured"); // Set default sort option to "Featured"

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  // Declare products before using it in sortedProducts
  const products = [
    {
      image1:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop01_600x.jpg?v=1658903378",
      image2:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378",
      book_name: "SECRET OF PRAYER",
      category: "Blooms book",
      price: 80,
      width: 326,
    },
    {
      image1:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop02_600x.jpg?v=1658903531",
      image2:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378",
      book_name: "START WITH AN IDEA",
      category: "Blooms book",
      price: 200,
      width: 326,
    },
    {
      image1:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop01_600x.jpg?v=1658903378",
      image2:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378",
      book_name: "ANIMAL IN THE WILD",
      category: "Blooms book",
      price: 100,
      width: 326,
    },
    {
      image1:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop04.1_600x.jpg?v=1658903637",
      image2:
        "https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378",
      book_name: "EXPLORING OCEAN LIFE",
      category: "Blooms book",
      price: 50,
      width: 326,
    },
  ];

  const sortedProducts =
    sortOption === "Featured" ? products : sortProducts(products, sortOption);

  return (
    <div className="mx-4 md:mx-[230px] my-[80px] md:my-[150px] flex flex-col gap-[40px] md:gap-[56px]">
      <div className="h-[48px] py-[8px] border-b-[1px] border-black flex justify-between pb-[20px] md:pb-[40px]">
        <div className="h-[32px] flex items-center relative justify-center border-black border-[1px]">
          <div
            onClick={() => setIsGridView(true)}
            className="cursor-pointer px-1 transition-colors duration-300 hover:text-blue-700 z-10"
          >
            <CgMenuGridR size={23} />
          </div>
          <div
            onClick={() => setIsGridView(false)}
            className="cursor-pointer px-1 transition-colors duration-300 hover:text-blue-700 z-10"
          >
            <CgLayoutList size={33} />
          </div>
          <div
            className={`absolute bottom-0 left-0 transition-all duration-300 ${
              isGridView ? "translate-x-0" : "translate-x-full"
            } w-[36px] h-[31px] bg-[#595959] opacity-80`}
          />
        </div>
        <div className="relative text-[14px] text-[#fff] raleway">
          <button
            onClick={toggleDropdown}
            className="p-2 flex justify-between text-left w-full md:w-[157px] bg-[#24201c]"
          >
            {sortOption}
            {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
          </button>
          {isDropdownOpen && (
            <div className="absolute z-2 mt-2 w-full bg-[#595959] shadow-lg">
              <ul>
                <li
                  className="py-1 px-2 hover:bg-[#24201c] cursor-pointer"
                  onClick={() => handleSortChange("Alphabetically, A-Z")}
                >
                  Alphabetically, A-Z
                </li>
                <li
                  className="py-1 px-2 hover:bg-[#24201c] cursor-pointer"
                  onClick={() => handleSortChange("Alphabetically, Z-A")}
                >
                  Alphabetically, Z-A
                </li>
                <li
                  className="py-1 px-2 hover:bg-[#24201c] cursor-pointer"
                  onClick={() => handleSortChange("Price, high to low")}
                >
                  Price, high to low
                </li>
                <li
                  className="py-1 px-2 hover:bg-[#24201c] cursor-pointer"
                  onClick={() => handleSortChange("Price, low to high")}
                >
                  Price, low to high
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        {isGridView ? (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[56px]`}
          >
            {sortedProducts.map((product, index) => (
              <div className="flex-shrink-0 md:w-[30%]">
                <ProductCard
                  key={index}
                  {...{ ...product }}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[56px] text-left`}
          >
            {sortedProducts.map((product, index) => (
              <ProductCardGrid
                key={index}
                {...{ ...product }}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopProducts;
