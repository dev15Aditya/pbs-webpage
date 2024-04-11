import React, { useState } from 'react';
import { Avatar } from '@nextui-org/react';

export default function App() {
  const [selectedDescription, setSelectedDescription] = useState(null);

  const handleDescriptionClick = (description) => {
    setSelectedDescription(description);
  };

  const handleClosePopup = () => {
    setSelectedDescription(null);
  };

  const quadrants = [
    {
      title: 'Inter-dealer Broker',
      displayTitle:
        'Our core expertise lies in the broking of over-the-counter commodity derivatives.',
      description:
        'Leveraging on our extensive market connectivity, we are able to offer liquidity and facilitate the matching of buyers and sellers as an intermediary, thus enabling our clients’ greater access to the global derivatives market, price discovery and anonymity all at the same time.',
      path: 'circle(50% at 100% 100%)',
      x: 'bottom-10',
      y: 'left-[62%]',
      lx: 'bottom-20',
      ly: 'left-[70%]',
      bg: 'bg-[#81ef6b]',
    },
    {
      title: 'Physical Brokering',
      displayTitle:
        'Our team is adept at physical brokering for crude oil and refined oil products.',
      description:
        'With knowledge and expertise in market analysis, negotiation, and risk management we are able to identify suitable counterparties for our clients to facilate smooth and efficient transactions of the physical quantities of crude oil and refined products.',
      path: 'circle(50% at 0 100%)',
      x: 'bottom-10',
      y: 'right-[62%]',
      lx: 'bottom-20',
      ly: 'right-[70%]',
      bg: 'bg-[#2da9e7]',
    },
    {
      title: 'Hedging Solutions',
      displayTitle:
        'We offer innovative and effective derivative hedging solutions to help our clients safeguard their investments.',
      description:
        'At PBS we understand the challenges posed by market fluctuations and are dedicated to tailoring our hedging solutions to our clients to help them navigate potential losses or exposure to market volatility effectively.',
      path: 'circle(50% at 100% 0)',
      x: 'top-10',
      y: 'left-[62%]',
      lx: 'top-20',
      ly: 'left-[70%]',
      bg: 'bg-[#047093]',
    },
    {
      title: 'Research & Analysis',
      displayTitle:
        'We offer cutting edge market insights and data reports from our experienced analysts.',
      description:
        'With our research and analysis on market trends and dynamics in the commodity markets, we are able to provide our clients with the essential information for them to make well informed trading decisions.',
      path: 'circle(50% at 0 0)',
      x: 'top-10',
      y: 'right-[62%]',
      lx: 'top-20',
      ly: 'right-[70%]',
      bg: 'bg-[#437000]',
    },
  ];

  return (
    <div className="min-h-[110vh] lg:min-h-[220vh] overflow-hidden mt-3  flex flex-col justify- items-center pb-[150px] relative bg-[#000000]">
      <div className="relative">
        <img src="./Our Services.jpg" alt="" />
        <h1 className="text-[14px] md:text-[40px]  tracking-tighter leading-[130%] font-sans font-semibold m-3 text-[#FFF] px-5 absolute top-1/2 md:left-[4%]">
          Your trusted partner in navigating <br /> the complexities of
          commodity trading{' '}
        </h1>
      </div>
      <div className="relative top-72">
        <Avatar
          src="./NLogo.png"
          className="h-20 w-20 lg:w-40 lg:h-40 bg-black text-large rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        />

        {/* <div className="bg-[#000000] w-44 h-44 text-large rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div> */}

        {/* <div className="grid grid-cols-2 grid-rows-2 min-w-[280px] min-h-[280px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {quadrants.map((quadrant, index) => (
            <div
              key={index}
              className={`${quadrant.bg} text-[#FFFFFF] relative flex justify-center items-center`}
              style={{
                clipPath: `${quadrant.path}`,
                height: '100%',
                width: '100%',
              }}
            ></div>
          ))}
        </div> */}

        <div className="grid grid-cols-2 grid-rows-2 w-[95vw] max-w-[1200px] h-[500px] lg:h-[450px] gap-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          {quadrants.map((quadrant, index) => (
            <div
              key={index}
              className={`bg-[rgba(255, 255, 255, 0.2)] rounded-2xl p-5 lg:px-20 h-full`}
              style={{
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 252, 252, 0.3)',
              }}
              onClick={() => handleDescriptionClick(quadrant.description)}
            >
              <h1 className="text-[14px] mb-4 md:text-[20px] lg:text-[22px] text-center font-bold lg:mt-10 md:mt-0">
                {quadrant.title}
              </h1>
              <p className="text-[10px] md:text-[12px] mb-3 lg:text-[16px] font-semibold text-center md:text-left">
                {quadrant.displayTitle}
              </p>
              <p className="text-[12px] hidden h-[180px] w-[full] text-ellipsis">
                {quadrant.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {selectedDescription && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div
            className="rounded-lg p-8 max-w-md z-50"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <p className="text-white">{selectedDescription}</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
