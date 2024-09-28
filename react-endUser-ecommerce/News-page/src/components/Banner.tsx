import React from "react";

const Banner = () => {
  return (
    <div
      className='flex justify-center items-center'
      style={{
        backgroundImage: "url('/public/images/Banner_1.png')",
        width: "100vw",
        height: "256px",
        opacity: "0.6",
      }}
    >
      <p className='text-center'>
        <span className='text-[#fff] text-[40px] font-playfair font-semibold'>
          News
        </span>
        <br />
        <span className='text-[#fff] text-[14px] font-playfair font-medium uppercase'>
          Home/News
        </span>
      </p>
    </div>
  );
};

export default Banner;
