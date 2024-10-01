import Image from "next/image";

function HomeGridCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-auto">
      <div className="relative overflow-hidden group">
        <Image
          src="https://dt-bookmax.myshopify.com/cdn/shop/files/grid01_64647e2d-8bc9-4a6f-b00d-b5235e021b17.jpg?v=1658907437"
          alt="gridImage"
          width={800} // Điều chỉnh kích thước width phù hợp với ảnh gốc
          height={600} // Điều chỉnh chiều cao tương ứng để giữ tỉ lệ
          className="transition-transform duration-300 w-full"
          layout="responsive" // Giữ tỷ lệ và điều chỉnh kích thước tự động
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
        <Image
          src="https://dt-bookmax.myshopify.com/cdn/shop/files/grid03.jpg?v=1658907216"
          alt="gridImage"
          width={800} // Bạn có thể thay đổi giá trị này dựa trên kích thước thực tế của ảnh
          height={600} // Điều chỉnh chiều cao tương ứng để giữ tỉ lệ
          className="transition-transform duration-300 w-full"
          layout="responsive" // Tự động thay đổi kích thước theo khung chứa
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
        <Image
          src="https://dt-bookmax.myshopify.com/cdn/shop/files/grid02_13159e25-8603-41a4-82f2-5f9a81fd82e9.jpg?v=1658907229"
          alt="gridImage"
          width={800} // Điều chỉnh chiều rộng theo kích thước thực tế
          height={600} // Điều chỉnh chiều cao tương ứng để giữ tỉ lệ
          className="transition-transform duration-300 w-full"
          layout="responsive" // Đảm bảo ảnh thay đổi kích thước theo khung chứa mà vẫn giữ tỷ lệ gốc
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
