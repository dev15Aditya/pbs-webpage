import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { Card, Avatar, CardHeader, CardBody, Divider } from '@nextui-org/react';

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
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden pb-[150px]">
      <div className="relative">
        <Avatar
          src="./NLogo.png"
          className="bg-[#1E2021] w-24 h-24 lg:w-32 lg:h-32 text-large border-[8px] border-solid border-[#000] rounded-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        />

        <div className="grid grid-cols-2 grid-rows-2 gap-2 min-w-[600px] min-h-[600px] lg:min-w-[800px] lg:min-h-[800px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {quadrants.map((quadrant, index) => (
            <Popover key={index} showArrow placement="top">
              <PopoverTrigger>
                <div
                  className="bg-[#1E2021] text-[#FFFFFF] relative flex justify-center items-center"
                  style={{
                    clipPath: `${quadrant.path}`,
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <p
                    className={`font-semibold lg:text-[18px] absolute ${quadrant.x} ${quadrant.y}  lg:${quadrant.lx} lg:${quadrant.ly} text-center lg:w-[120px]`}
                  >
                    {quadrant.title}
                  </p>
                </div>
              </PopoverTrigger>

              <PopoverContent className="bg-[#1E2021]">
                <Card className="max-w-[400px] bg-[#1E2021]">
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                      <p className="text-md text-[#FFFFFF]">
                        {quadrant.displayTitle}
                      </p>
                    </div>
                  </CardHeader>
                  <Divider className="bg-gray-200" />
                  <CardBody>
                    <p className="text-[#A6A6A6]">{quadrant.description}</p>
                  </CardBody>
                </Card>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  );
}
