function Banner() {
  return (
    <div className="relative w-full h-[500px] md:h-[830px]">
      <img
        className="h-full w-full object-cover"
        src="https://dt-bookmax.myshopify.com/cdn/shop/files/slide2.jpg?v=1652763900"
        alt="banner"
      />
      <div className="absolute top-0 left-0 z-2 px-4 md:px-[126px] py-[100px] md:py-[218px] flex flex-col gap-y-[40px] md:gap-y-[80px] font-semibold text-[#fff]">
        <div className="flex flex-col">
          <span className="raleway text-[16px] md:text-[18px]">
            CLASSIC BOOKS
          </span>
          <span className="text-[20px] md:text-[48px] w-full md:w-[353px]">
            Everyone Love’s Literature
          </span>
        </div>
        <button className="raleway text-[14px] md:text-[16px] w-full md:w-[216px] h-[51px] text-center text-[#fff] bg-[#1a1a1a] border border-white transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#1a1a1a]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
