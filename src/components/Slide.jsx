import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Spring } from 'react-spring/renderprops';
import { withGesture } from 'react-with-gesture';

const SlideContainer = styled.div`
  position: absolute;
  height: 70%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  border-radius: 16px;
`;

const SlideCard = styled.div`
  position: relative;
  width: 90%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  border-radius: 16px;
`;

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <SlideCard
            style={{ background: 'transparent' }}
            onClick={() => moveSlide(offsetFromMiddle)}
          >
            <div
              className="overflow-hidden p-5 rounded-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-tighter leading-[130%] font-semibold text-[#fff] mb-4">
                {content.title}
              </h1>
              <div
                className="flex flex-col sm:flex-row lg:gap-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={`./${content.image}`}
                  alt="crude"
                  className="md:w-[200px] lg:w-[520px] md:h-[150px] lg:h-[300px] rounded-lg mb-4 sm:mb-0"
                />
                <div className="flex flex-col lg:justify-center lg:gap-2 lg:w-[200px] lg:h-[300px] overflow-auto">
                  {isHovered
                    ? content.hoveredText.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm md:text-base lg:text-base text-[#808080] tracking-tighter leading-[130%] font-[500] list-none"
                        >
                          {item}
                        </li>
                      ))
                    : content.text.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm md:text-base lg:text-base text-[#808080] tracking-tighter leading-[130%] font-semibold list-none"
                        >
                          {item}
                        </li>
                      ))}
                </div>
              </div>
            </div>
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
