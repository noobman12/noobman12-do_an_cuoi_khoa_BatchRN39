import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { ProductProps } from "../utils/models";

function ProductCard({
  image1,
  image2,
  book_name,
  category,
  price,
  width,
}: ProductProps) {
  return (
    <>
      <div className={`h-[auto] relative group w-[${width}px]`}>
        <img src={image1} alt="" className={`h-[auto] w-[${width}px]`} />
        <img
          src={image2}
          alt=""
          className={`absolute w-[${width}px] h-auto top-[10px] left-[10px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-100 `}
        />
        <div
          className={`absolute w-[${width}px] bottom-[-10px] left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:bottom-1/3 group-hover:-translate-y-1/2 flex gap-2`}
        >
          <div className="w-10 h-10 bg-white border  flex items-center justify-center transition-colors duration-300 hover:bg-black hover:border-white text-black hover:text-white cursor-pointer">
            <FaShoppingCart className=" " />
          </div>
          <div className="w-10 h-10 bg-white border  flex items-center justify-center transition-colors duration-300 hover:bg-black hover:border-white text-black hover:text-white cursor-pointer">
            <FaSearch className=" " />
          </div>
        </div>
        <div
          className={`w-[${width}px] my-[24px] flex flex-col gap-[16px] text-center`}
        >
          <p className={`w-[${width}px] raleway font-semibold gap-[10px]`}>
            {book_name}
          </p>
          <p className="gap-y-[16px] text-[#3c3c3c] italic text-[12px] border-b-slate-800 border-b">
            {category}
          </p>
          <span className="raleway gap-[10px]">${price}</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
