function HoverCard() {
  return (
    <div className="flex flex-col items-center justify-center h-auto md:h-[800px]">
      <div className="relative w-[90%] sm:w-[80%] md:w-[625px] h-[300px] sm:h-[400px] md:h-[600px] group cursor-pointer">
        <img
          src="https://dt-bookmax.myshopify.com/cdn/shop/files/grid06.jpg?v=1658911934"
          alt=""
          className="absolute top-0 right-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:top-[-80px] group-hover:right-[-80px]"
        />
        <img
          src="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01_2000x.jpg?v=1658903378"
          alt=""
          className="absolute top-[-25px] w-full h-full right-[-25px] transition-all duration-700 ease-in-out group-hover:top-[-55px] group-hover:right-[-55px]"
        />
        <img
          src="https://dt-bookmax.myshopify.com/cdn/shop/products/shop03_2000x.jpg?v=1658903585"
          alt=""
          className="absolute top-[-55px] w-full h-full right-[-55px] transition-all duration-700 ease-in-out group-hover:top-[-25px] group-hover:right-[-25px]"
        />
        <img
          src="https://dt-bookmax.myshopify.com/cdn/shop/files/grid06.jpg?v=1658911934"
          alt=""
          className="absolute top-[-80px] w-full h-full right-[-80px] transition-all duration-700 ease-in-out group-hover:top-[0px] group-hover:right-[0px]"
        />
      </div>
      <div className="raleway text-[18px] sm:text-[20px] md:text-[24px] bottom-0 text-[#3c3631] hover:text-blue-500 transition-colors duration-300 mt-6 cursor-pointer">
        BEST HORROR COLLECTIONS
      </div>
    </div>
  );
}

export default HoverCard;
