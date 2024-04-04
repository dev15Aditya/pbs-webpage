import React from 'react';
import { Avatar } from '@nextui-org/react';

export default function App() {
  const quadrants = [
    {
      title: 'Inter-dealer Broker',
      displayTitle:
        'Our core expertise lies in the broking of over-the-counter OTC products.',
      description:
        'At PBS, we offer our clients a unified resource for price discovery, liquidity and execution, Leveraging on one extensive market connectivity. We are able to offer liquidity facilitate and the matching of buyers and sellers as an intermediary, which in return enable our clients greater access the global derivatives markets, price discovery and anonymity all at the same time leveraging our extensive market connectivity. We are able to offer liquidity to our clients. Acting as an intermediary, matching buyers and sellers, PBS offer our clients greater access to the global derivatives market, price discoveries & with a high level of confidentiality.',
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
        'Our team is adept at physical broking for crude oil & refined oil products.',
      description:
        'With knowledge and expertise in market analysis, negotiation, and risk management we are able tp identify suitable counterparties for our clients to facilate smooth and efficient transactions of the physical quantities of crude oil and refined products.',
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
        'PBS offer innovative and effective derivative hedging solutions to help our clients safeguard other investments.',
      description:
        'OTC derivatives provide a wide range of risk management solutions for market participants to hedge against potential losses or mitigate exposure to market volatility. At PBS, we understand the challanges posed by market fluctuations and are dedicated to tailoring our hedging solutions strategies to our clients to help them navigate these risks effectively.',
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
        'PBS offers cutting edge market weights and data reports from over experince analysts.',
      description:
        'Reaserching and analyzing market trends and dynamics in the commodity markets. We are able to provide our clients with the essential info, thus need to make well informed trading decisions.',
      path: 'circle(50% at 0 0)',
      x: 'top-10',
      y: 'right-[62%]',
      lx: 'top-20',
      ly: 'right-[70%]',
      bg: 'bg-[#437000]',
    },
  ];

  return (
    <div className="min-h-[80vh] lg:min-h-[130vh]  flex flex-col justify- items-center overflow-hidden pb-[150px] relative bg-[#000000]">
      <h1 className="text-[28px]  tracking-tighter leading-[130%] font-sans font-semibold m-5 text-[#FFF] px-5">
        Solutions know no boundaries, only limited by your imagination
      </h1>
      <div className="relative top-72">
        <Avatar
          src="./NLogo.png"
          className="bg-[#1E2021] w-24 h-24 text-large rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        />

        <div className="bg-[#000000] w-44 h-44 text-large rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
        <div className="grid grid-cols-2 grid-rows-2 min-w-[280px] min-h-[280px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {quadrants.map((quadrant, index) => (
            <div
              className={`${quadrant.bg} text-[#FFFFFF] relative flex justify-center items-center`}
              style={{
                clipPath: `${quadrant.path}`,
                height: '100%',
                width: '100%',
              }}
            ></div>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-2 w-[95vw] max-w-[1200px] h-[500px] lg:h-[600px] gap-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          {quadrants.map((quadrant, index) => (
            <div
              key={index}
              className={`bg-[rgba(255, 255, 255, 0.2)] rounded-2xl p-5 lg:px-20 h-full`}
              style={{
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <h1 className="text-[20px] lg:text-[22px] text-center font-bold">
                {quadrant.title}
              </h1>
              <p className="text-[14px] lg:text-[16px] font-semibold">
                {quadrant.displayTitle}
              </p>
              <p className="text-[12px] h-[180px] w-[full] text-ellipsis">
                {quadrant.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
