import Image from "next/image";
function PageBanner({
  bannerTitle,
  bannerUrl,
}: {
  bannerTitle: string;
  bannerUrl: string;
}) {
  return (
    <div className="relative h-[256px] items-center flex justify-center ">
      <Image
        className="relative opacity-60 backdrop-blur-3xl h-auto max-h-[256px] w-full object-cover"
        src="https://dt-bookmax.myshopify.com/cdn/shop/files/slide2.jpg?v=1652763900"
        alt="Descriptive alt text"
        layout="fill" // Makes the image cover the parent div
        objectFit="cover" // Keeps the aspect ratio and fills the div
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      <div className="absolute text-[#fff] text-center">
        <p className="text-[40px] p-[8px]">{bannerTitle}</p>
        <p className="raleway text-[14px]">{bannerUrl}</p>
      </div>
    </div>
  );
}

export default PageBanner;
