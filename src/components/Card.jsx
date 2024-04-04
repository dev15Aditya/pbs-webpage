import React, { useState } from 'react';

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="overflow-hidden mt-8 p-5 rounded-3xl"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <h1 className="text-[28px] tracking-tighter leading-[130%] font-sans font-semibold text-[#f8f8f8] mb-4">
        {data.title}
      </h1>
      <div
        className="flex min-w-[320px] h-[180px] md:h-[50vh] lg:gap-8 max-h-[390px] lg:h-[70vh]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`./${data.image}`}
          alt="crude"
          className="w-[70%] h- rounded-3xl mr-4"
        />
        <div className="flex flex-col lg:justify-center lg:gap-y-5 w-[30%] overflow-auto">
          {isHovered
            ? data.hoveredText.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] md:text-[24px] text-left text-[#808080] tracking-tighter leading-[130%] font-[500] list-none underline"
                >
                  {item}
                </li>
              ))
            : data.text.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] md:text-[24px] text-left text-[#808080] tracking-tighter leading-[130%] font-semibold list-none underline"
                >
                  {item}
                </li>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
