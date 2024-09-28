function HomeGridCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-auto">
      <div className="relative overflow-hidden group">
        <img
          src="https://dt-bookmax.myshopify.com/cdn/shop/files/grid01_64647e2d-8bc9-4a6f-b00d-b5235e021b17.jpg?v=1658907437"
          alt="gridImage"
          className="transition-transform duration-300 w-full"
        />
        <div className="absolute w-full h-full top-0 left-0 bottom-0 bg-[#292929] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left">
          <div className="flex flex-col gap-[20px] text-[#fff] items-center text-center justify-center h-full">
            <p className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold">
              Research Books
            </p>
            <p className="raleway font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
              FABULOUS
            </p>
            <button className="raleway text-[14px] md:text-[16px] w-full md:w-[160px] h-[51px] border border-white transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#1a1a1a] cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden group">
        <img
          src="	https://dt-bookmax.myshopify.com/cdn/shop/files/grid03.jpg?v=1658907216"
          alt="gridImage"
          className="transition-transform duration-300 w-full"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[#292929] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left">
          <div className="flex flex-col gap-[20px] text-[#fff] items-center text-center justify-center h-full">
            <p className="text-[40px] font-semibold">Research Books</p>
            <p className="raleway font-semibold">FABULOUS</p>
            <button className="raleway text-[16px] w-full md:w-[160px] h-[51px] border border-white transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#1a1a1a] cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden group">
        <img
          src="https://dt-bookmax.myshopify.com/cdn/shop/files/grid02_13159e25-8603-41a4-82f2-5f9a81fd82e9.jpg?v=1658907229"
          alt="gridImage"
          className="transition-transform duration-300 w-full"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[#292929] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left">
          <div className="flex flex-col gap-[20px] text-[#fff] items-center text-center justify-center h-full">
            <p className="text-[40px] font-semibold">Research Books</p>
            <p className="raleway font-semibold">FABULOUS</p>
            <button className="raleway text-[16px] w-full md:w-[160px] h-[51px] border border-white transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#1a1a1a] cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeGridCard;
