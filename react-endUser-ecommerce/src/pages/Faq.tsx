import Banner from "@/components/Banner";
import QuestionBox from "@/components/QuestionBox";
import React from "react";

const Faq = () => {
  return (
    <div className='pb-[100px]'>
      <Banner bannerTitle='Faq' bannerUrl='Home/Faq' />
      <section className='main grid grid-cols-1 gap-[20px] md:gap-[48px] h-auto w-[100vw] mx-auto mt-[40px] md:mt-[80px]'>
        <div className='title font-playfair font-medium text-[18px] md:text-[40px] mx-auto'>
          Answer To Your Questions
        </div>
        <div className='h-auto mx-auto flex flex-col gap-[12px] md:gap-[24px] w-[100vw]'>
          <QuestionBox
            question='How will i know if order is placed successfully?'
            answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores, quis nostrum a nemo aut, explicabo suscipit accusamus inventore voluptates animi iste. Fugiat, exercitationem?'
          />
          <QuestionBox
            question='How will i know if order is placed successfully?'
            answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores, quis nostrum a nemo aut, explicabo suscipit accusamus inventore voluptates animi iste. Fugiat, exercitationem?'
          />
          <QuestionBox
            question='How will i know if order is placed successfully?'
            answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores, quis nostrum a nemo aut, explicabo suscipit accusamus inventore voluptates animi iste. Fugiat, exercitationem?'
          />
          <QuestionBox
            question='How will i know if order is placed successfully?'
            answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores, quis nostrum a nemo aut, explicabo suscipit accusamus inventore voluptates animi iste. Fugiat, exercitationem?'
          />
        </div>
      </section>
    </div>
  );
};

export default Faq;
