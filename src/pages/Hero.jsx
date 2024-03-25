import React from 'react';

const Hero = () => {
  return (
    <div className="h-full p-6 md:px-10 lg:px-5 max-w-[1024px] mx-auto">
      <p className="text-[24px] lg:text-[64px] font-semibold bg-gradient-to-b from-[#FFFFFF] to-gray-700 bg-clip-text text-transparent leading-tight">
        Connecting clients to <br />
        the global <br />
        commodities market
      </p>
      <button className="mt-8 text-center bg-[#0066FF] h-[40px] max-w-[110px]  py-2 px-4 rounded-[8px] text-[#FFFFFF] font-semibold text-[14px]">
        Contact Us
      </button>
    </div>
  );
};

export default Hero;
