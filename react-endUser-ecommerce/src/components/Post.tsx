import { PostInfo } from "./PostInfo";
import React from "react";

const Post = ({ image }: { image: string }) => {
  return (
    <div className='post w-[330px] md:w-[630px] lg:w-[530px] lg:h-[784.13px] mx-auto mt-[14px] lg:mt-[80px]'>
      <img
        src={image}
        alt=''
        className='thumbnail w-full h[214px] lg:h-[491px] object-cover '
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
