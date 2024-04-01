import React from 'react';

const Hero = () => {
  return (
    <div className="relative p-6 md:px-10 lg:px-5 max-w-[1024px] mx-auto h-[100vh] overflow-hidden flex flex-col items-center gap-10 md:justify-between">
      <video
        autoPlay
        loop
        muted
        className="md:absolute top-0 left-0 w-full h-auto z-0"
      >
        <source src="/heroback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="text-[45px] md:text-[70px] text-center font-semibold text-[#FFF] leading-[103%] z-10 md:absolute top-[30%]">
        Connecting clients to the global commodities market
      </p>
      <button className="mt-8 mb-24 text-center bg-[#0066FF] h-[40px] max-w-[110px]  py-2 px-4 rounded-[8px] text-[#FFFFFF] font-semibold text-[14px] z-10 md:absolute bottom-0">
        Contact Us
      </button>
    </div>
  );
};

export default Hero;
