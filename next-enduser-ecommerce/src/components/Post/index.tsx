import React from "react";
import { PostInfo } from "../PostInfo";
import Image from "next/image";

const Post = ({ image }: { image: string }) => {
  return (
    <div className='post w-[330px] md:w-[630px] lg:w-[530px] lg:h-[784.13px] mx-auto mt-[14px] lg:mt-[80px]'>
      <Image
        src={image} // Đường dẫn tới hình ảnh
        alt=''
        width={800} // Chiều rộng tối đa (tùy chỉnh theo nhu cầu)
        height={491} // Chiều cao lớn nhất
        className='thumbnail w-full h-[214px] lg:h-[491px] object-cover' // Giữ nguyên các class Tailwind CSS
        layout='responsive' // Để tự động thay đổi kích thước theo khung chứa
      />
      <PostInfo
        user='Ram M'
        time='November 26, 2024'
        commentNumber={1}
        title='Today a reader, tomorrow a leader'
        paragraph='Proin sagittis ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus....'
      />
    </div>
  );
};

export default Post;
