function PageBanner({
  pageName,
  urlPage,
}: {
  pageName: string;
  urlPage: string;
}) {
  return (
    <div className="relative h-[256px] items-center flex justify-center ">
      <img
        className="relative opacity-60 top-0 backdrop-blur-3xl h-[256px] w-full object-cover "
        src="https://dt-bookmax.myshopify.com/cdn/shop/files/slide2.jpg?v=1652763900"
        alt=""
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      <div className="absolute text-[#fff] text-center">
        <p className="text-[40px] p-[8px]">{pageName}</p>
        <p className="raleway text-[14px]">{urlPage}</p>
      </div>
    </div>
  );
}

export default PageBanner;
