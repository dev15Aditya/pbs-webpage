import React from 'react';

const Hero = () => {
  return (
    <div className="relative p-6 md:px-10 lg:px-5 max-w-[1024px] mx-auto h-[100vh] overflow-hidden flex flex-col items-center justify-between">
      <video
        autoPlay
        loop
        muted
        className="md:absolute top-0 left-0 w-full h-auto z-0"
      >
        <source src="./bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="text-[24px] md:text-[44px] font-semibold bg-gradient-to-b from-[#FFFFFF] to-gray-700 bg-clip-text text-transparent leading-tight z-10 relative">
        Connecting clients to the global commodities market
      </p>
      <button className="mt-8 mb-14 text-center bg-[#0066FF] h-[40px] max-w-[110px]  py-2 px-4 rounded-[8px] text-[#FFFFFF] font-semibold text-[14px] z-10 relative">
        Contact Us
      </button>
    </div>
  );
};

export default Hero;
