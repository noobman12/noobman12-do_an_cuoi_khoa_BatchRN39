function HomeBestStory() {
  return (
    <div className="flex flex-col gap-[40px] my-[80px] items-center text-center">
      <div className="flex flex-col gap-[56px]">
        <p className="raleway font-medium text-[24px]">BEST STORIES</p>
        <div className="group relative">
          <img
            src="https://dt-bookmax.myshopify.com/cdn/shop/files/Untitled-5.jpg?v=1652695681"
            alt="bestStory"
            className="w-full md:w-[980px]"
          />
          <div className="w-full md:w-[980px] h-[411px] bg-[#fff] absolute top-[10px] left-[10px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-40 group-hover:translate-x-4 group-hover:translate-y-2 group-hover:scale-100" />
        </div>
      </div>
      <div>
        <p className="font-bold italic w-full md:w-[980px]">
          Adipiscing elit duis tristique sollicitudin nibh justo donec enim diam
          vulputate ut pharetra faucibus pulvinar elementum integer enim
          dignissim enim sit amet venenatis proin libero nunc consequat interdum
          amet risus nullam eget felis eget nunc loborti ullamcorper sit amet
          risus placerat vestibulum lectus mauris ultrices eros in. Diam vel
          quam elementum pulvinar etiam non quam lacus.
        </p>
      </div>
      <div>
        <button className="raleway text-[16px] w-full md:w-[160px] h-[51px] border-[2px] border-black transition duration-500 ease-in-out hover:bg-[#393939] hover:text-[#fff] cursor-pointer">
          SHOP NOW
        </button>
      </div>
      <div className="raleway font-semibold">
        <div className="font-semibold">INSTAGRAM</div>
        <div className="font-bold italic p-5">@BOOKREADER</div>
      </div>
    </div>
  );
}

export default HomeBestStory;
