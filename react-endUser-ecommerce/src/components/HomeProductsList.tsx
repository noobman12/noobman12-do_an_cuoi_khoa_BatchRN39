import ProductCard from "./ProductCard";

function HomeProductsList() {
  return (
    <div className="mx-[5%] md:mx-[15%] lg:mx-[15%] my-[80px] flex flex-col gap-[80px] text-center">
      <div className="flex flex-col gap-[24px] text-[20px] md:text-[30px] lg:text-[40px]">
        <span className="font-semibold italic">
          Action & Adventure Collection
        </span>
        <span className="text-[14px] md:text-[18px] lg:text-[24px] text-[#898989] raleway">
          Cras tincidunt lobortis feugiat vivamus Eu facilisis sed odio morbi
          quis commodo odio Sit amet est placerat
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-[300px]">
        <ProductCard
          image1="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01_600x.jpg?v=1658903378"
          image2="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378"
          book_name="SECRET OF PRAYER"
          category="Blooms book"
          price={300}
          width={300} // Adjusted width for better fit
        />
        <ProductCard
          image1="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01_600x.jpg?v=1658903378"
          image2="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378"
          book_name="SECRET OF PRAYER"
          category="Blooms book"
          price={300}
          width={300} // Adjusted width for better fit
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-[300px]">
        <ProductCard
          image1="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01_600x.jpg?v=1658903378"
          image2="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378"
          book_name="SECRET OF PRAYER"
          category="Blooms book"
          price={300}
          width={300}
        />
        <ProductCard
          image1="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01_600x.jpg?v=1658903378"
          image2="https://dt-bookmax.myshopify.com/cdn/shop/products/shop01.1_600x.jpg?v=1658903378"
          book_name="SECRET OF PRAYER"
          category="Blooms book"
          price={300}
          width={300}
        />
      </div>
    </div>
  );
}

export default HomeProductsList;
