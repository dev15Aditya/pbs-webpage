import React from 'react';

const Hero = () => {
  return (
    <div className="p-6 md:px-10 lg:px-5 max-w-full mx-auto h-[100vh] overflow-y-hidden-hidden flex flex-col items-center gap-10 justify-center md:justify-evenly">
      <video
        autoPlay
        loop
        muted
        className="absolute top-[10vh] left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="text-[24px] max-w-[1024px] mx-auto md:text-[70px] text-left font-semibold text-[#FFF] leading-[103%] z-10">
        Connecting clients to the global commodities market
      </p>
      <button className="text-[#A6A6A6] border-[2px] border-[#272B36] bg-[#050507] hover:font-semibold hover:text-white z-40 px-4 py-2 rounded-xl mb-20">
        Contact Us
      </button>
    </div>
  );
};

export default Hero;
