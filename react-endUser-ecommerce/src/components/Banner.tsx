import React from "react";

const Banner = ({
  bannerTitle,
  bannerUrl,
}: {
  bannerTitle?: string;
  bannerUrl?: string;
}) => {
  return (
    <div
      className='flex justify-center items-center'
      style={{
        backgroundImage: "url('/public/images/Banner_1.png')",
        width: "100%",
        height: "256px",
        opacity: "0.6",
      }}
    >
      <p className='text-center'>
        <span className='text-[#fff] text-[40px] font-playfair font-semibold'>
          {bannerTitle}
        </span>
        <br />
        <span className='text-[#fff] text-[14px] font-playfair font-medium uppercase'>
          {bannerUrl}
        </span>
      </p>
    </div>
  );
};

export default Banner;
