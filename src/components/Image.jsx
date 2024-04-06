import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Image({ image }) {
  const [iseFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!iseFlipped);
  };
  return (
    <ReactCardFlip isFlipped={iseFlipped} flipDirection="vertical">
      <img
        src={`./${image[0]}`}
        alt="people"
        className="w-[240px] h-[350px] cursor-pointer  rounded-lg"
        onMouseEnter={handleClick}
      />
      <div
        className="w-[240px] h-[350px] cursor-pointer flex flex-col justify-center rounded-lg bg-white/20 shadow-md backdrop-blur-5 border border-white/30"
        // style={{
        //   background: 'rgba(255, 255, 255, 0.1)',
        //   boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        //   backdropFilter: 'blur(5px)',
        //   WebkitBackdropFilter: 'blur(5px)',
        //   border: '1px solid rgba(255, 255, 255, 0.1)',
        // }}
        onMouseLeave={handleClick}
      >
        <h1 className="text-white text-xl font-semibold text-center">
          {image[1]}
        </h1>
        <p className="text-white text-sm font-semibold text-center">
          {image[2]}
        </p>
      </div>
    </ReactCardFlip>
  );
}
