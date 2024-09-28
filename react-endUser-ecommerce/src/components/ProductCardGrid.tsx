import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { ProductProps } from "../utils/models";

function ProductCardGrid({
  image1,
  image2,
  book_name,
  category,
  price,
  width,
}: ProductProps) {
  return (
    <div className="flex flex-row items-center">
      <div className={`h-[auto] relative group w-[${width}px]`}>
        <img src={image1} alt="" className="w-full h-auto" />
        <img
          src={image2}
          alt=""
          className="absolute top-[10px] left-[10px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-100"
        />
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bottom-1/3 group-hover:-translate-y-1/2 flex gap-2">
          <div className="w-10 h-10 bg-white border  flex items-center justify-center transition-colors duration-300 hover:bg-black hover:border-white text-black hover:text-white cursor-pointer">
            <FaShoppingCart className=" " />
          </div>
          <div className="w-10 h-10 bg-white border  flex items-center justify-center transition-colors duration-300 hover:bg-black hover:border-white text-black hover:text-white cursor-pointer">
            <FaSearch className=" " />
          </div>
        </div>
      </div>
      <div className={`p-[40px] flex flex-col gap-y-[30px] py-[50px]`}>
        <span className="raleway tracking-widest font-semibold text-[#1b1b1b] gap-[10px] text-[16px]">
          {book_name}
        </span>
        <span className="font-semibold w-[100px] pb-[30px] text-[#5b5b5b] italic text-[16px] border-b-[#5b5b5b] border-b-2 ">
          {category}
        </span>
        <span className="raleway gap-[10px]">${price}</span>
      </div>
    </div>
  );
}

export default ProductCardGrid;
