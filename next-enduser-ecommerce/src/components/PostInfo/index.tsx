import React from "react";
import Image from "next/image";

export const PostInfo = ({
  user,
  time,
  commentNumber,
  title,
  paragraph,
}: {
  user: string;
  time: string;
  commentNumber: number;
  title: string;
  paragraph: string;
}) => {
  return (
    <>
      <div className="flex">
        <div className="flex items-center user mt-[14px] lg:mt-[24px]">
          <Image
            src="/images/icon-user.png" // Đường dẫn tới ảnh
            alt=""
            width={20} // Chiều rộng lớn nhất
            height={20} // Chiều cao lớn nhất
            className="object-cover mt-[8px] md:mt-[10px] lg:mt-[3px] sm:w-[13px] sm:h-[13px] md:w-[20px] md:h-[20px]"
            layout="responsive" // Giúp hình ảnh tự động thay đổi kích thước
          />
          <span className="text-[dark] text-[12px] md:text-[16px] lg:text-[16px] font-medium font-raleway ml-[8px] pr-[12px] mt-[8px] md:mt-[10px] lg:mt-[3px]">
            By {user}
          </span>
        </div>
        <div className="flex items-center time mt-[24px]  border-l-[1px] border-[#000000] pl-[12px]">
          <Image
            src="/images/icon-calendar.png" // Đường dẫn tới ảnh, không cần '/public'
            alt=""
            width={20} // Chiều rộng của ảnh
            height={20} // Chiều cao của ảnh
            className="object-cover mt-[6px] md:m-[3px]" // Giữ nguyên các class Tailwind CSS
          />
          <span className="text-[dark] font-medium  text-[12px] md:text-[16px] lg:text-[16px] font-raleway ml-[8px] pr-[12px] mt-[3px]">
            {time}
          </span>
        </div>
        <div className="flex items-center comment-number mt-[24px] border-l-[1px] border-[#000000] pl-[12px]">
          <Image
            src="/images/icon-chat.png" // Đường dẫn tới ảnh, không cần '/public'
            alt=""
            width={20} // Chiều rộng của ảnh
            height={20} // Chiều cao của ảnh
            className="object-cover mt-[8px] md:m-[3px]" // Giữ nguyên các class Tailwind CSS
          />
          <span className="text-[dark] font-medium font-raleway text-[12px] md:text-[16px] lg:text-[16px] ml-[8px] pr-[12px] mt-[3px]">
            {commentNumber} Comment
          </span>
        </div>
      </div>
      <div className="title font-playfair font-medium text-[16px] md:text-[16px] lg:text-[24px] mt-[10px] md:mt-[16px] lg:mt-[24px]">
        {title}
      </div>
      <p className="paragraph font-raleway text-[12px] md:text-[16px] lg:text-[14px] font-medium md:mt-[16px] mt-[16px] lg:mt-[24px]">
        {paragraph}
      </p>
      <a href="#">
        <div className="font-raleway font-light text-[16px] mt-[24px] border-2 border-[#24201C] sm:w-[120px] sm:h-[28px] md:w-[150px] md:h-[32px] lg:w-[183px] lg:h-[43px] content-center text-center">
          READ MORE
        </div>
      </a>
    </>
  );
};
