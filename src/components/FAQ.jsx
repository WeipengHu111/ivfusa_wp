import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-2 w-full bg-white/40 my-4 text-sm sm:text-base rounded-3xl">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="m-1">{title}</span>
        <svg
          className="fill-black shrink-0 m-1"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-[#f5efef]">
      {/* 标题移到容器外 */}
      <h2 className="px-8 pt-10 md:px-12 md:pt-14 lg:px-14 lg:pt-16 text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold text-[#2D2D2D] text-left mb-8">常见问题</h2>

      <div className="max-w-[2000px] px-10 pb-4 sm:px-36 sm:pb-6 md:px-56 md:pb-8 lg:px-60 lg:pb-12 mx-auto rounded-3xl">
        <Accordion
            title="第一个问题多少岁冻卵"
            answer="第一个问题的答案35岁以前"
        />
        <Accordion
            title="第二个问题取卵手术会不会造成伤害"
            answer="第二个问题的答案不会"
        />
        <Accordion 
            title="第三个问题?" 
            answer="第三个问题的答案" />
      </div>
    </div>
  );
};

export default FAQ;
