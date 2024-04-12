import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    // Disable vertical scrolling on the entire page
    document.body.style.overflowY = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div className="relative px-6 md:px-10 lg:px-5 max-w-full mx-auto h-[90vh] overflow-hidden flex flex-col gap-10 justify-center md:justify-evenly">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[90vh] overflow-hidden object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="z-10 max-w-[1024px] mx-auto flex flex-col gap-5">
        <p className="text-[24px] md:text-[70px] text-left font-semibold text-[#FFF] leading-[103%] z-10">
          Connecting clients to <br /> the global commodities market
        </p>

        <Link
          to="/products"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
          className="text-[#ffffff] border-[2px] border-[#272B36] bg-[] hover:font-semibold hover:text-white z-40 px-4 py-2 rounded-xl w-[150px] text-center"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Hero;
