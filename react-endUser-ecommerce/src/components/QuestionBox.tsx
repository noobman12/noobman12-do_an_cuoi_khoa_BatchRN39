import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function QuestionBox({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [state, setState] = useState("hidden");
  return (
    <div>
      <div className=' flex md:w-[80vw] md:mx-auto sm:w-[80vw] sm:mx-[auto] justify-between items-center question text-white text-[12px] md:text-[24px] font-palyfair font-medium bg-[#212121] w-[100vw] md:h-[64px] h-[42px] px-[24px]'>
        <span>{question}</span>
        <button
          onClick={() => {
            if (state === "hidden") {
              setState("pop-down" as string);
            } else if (state === "pop-down") {
              setState("hidden" as string);
            } else {
              setState("hidden");
            }
          }}
        >
          <FiPlus
            className='w-[32px] h-[30px] bg-[#212121]'
            strokeWidth={2}
            style={{}}
          />
        </button>
      </div>
      <div
        className={cn(
          "answer text-black  text-[12px] md:text-[24px] w-auto md:w-[80vw] md:mx-auto",
          state
        )}
      >
        {answer}
      </div>
    </div>
  );
}
