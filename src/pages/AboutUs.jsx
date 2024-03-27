import React, { useState } from 'react';
import People from '../components/People';
import { Pagination } from '@nextui-org/react';

const ourPeople = [
  {
    name: 'Louis Lui',
    position: 'Head of Fuel Oil Desk',
    image: './logo192.png',
    description:
      'After excelling as a money broker for 13 years, specialising in FX and money market, Louis transitioned to the oil industry in 2004. Within just 6 months, he took over as the Head of Fuel Oil Desk at PVM.\n In 2008, Louis was head hunted to rebuild the Fuel Oil Desk in Ginga Petroleum after it lost four senior brokers. Under his leadership, the desk quickly became the top performing Fuel Oil Desk in the market. Louis himself was the top performer, contributing 24% to the desk’s revenue.\n In 2015, Louis started Ginga’s Gasoline Desk from scratch. In just 3 years, he transformed it into a profitable desk with a client base of over 300 and expanded into new markets across Europe, Japan, Korea, China, Philippines, Taiwan, Thailand and Myanmar.\n Louis then joined CIMB Bank Berhad Singapore in 2018 as the Head of Sales for Commodity. In this role, he offered a credit facility under Structured Trade Financing to cross sell both FX and derivative hedging to oil clients. With his extensive network and deep market acknowledge, he trained the sales team in Singapore, Malaysia and Thailand, successfully growing CIMB’s oil franchise business.\n Louis stands out as a rare hybrid broker, possessing expertise in both financial and oil derivatives market as well as the oil physical market.',
  },
  {
    name: 'Ram',
    position: 'Crude Derivatives Desk Head',
    image: './logo192.png',
    description:
      'For 15 years, Ram demonstrated exceptional skills as a spot and forwards broker in the financial markets. In 2004, he was recruited to join the Crude Derivatives Desk at PVM Singapore. Despite having no prior knowledge of the commodities markets, Ram successfully established and solidified relationships with clients from Malaysia, India and Japan. Within 5 years, he emerged as the most profitable crude broker in the industry and was appointed as the Crude Derivatives Desk head in 2012.\n In 2019, Ram was approached to start the Crude Desk at Ginga Petroleum. Over a span of 3.5 years, he meticulously trained the team and transformed it to be one of the leading crude teams in the industry.\n Ram is a seasoned professional in his field and is passionate about nurturing the next generation of brokers.',
  },
];

const Card = ({ page }) => {
  const content = [
    {
      title: 'Our Purpose',
      text: 'At PBS, we believe our job goes beyond acting as intermediaries. We are committed to empowering our clients by providing exceptional brokerage services that enable informed decision making and strategic trading in the commodities market',
    },
    {
      title: 'Our Vision',
      text: 'To be the trusted partner of choice for commodities traders globally, recognised for our expertise, unparalleled support and unwavering commitment to the success of our clients.',
    },
    {
      title: 'Our Vision2',
      text: 'To be the trusted partner of choice for commodities traders globally, recognised for our expertise, unparalleled support and unwavering commitment to the success of our clients.',
    },
    {
      title: 'Our Vision3',
      text: 'To be the trusted partner of choice for commodities traders globally, recognised for our expertise, unparalleled support and unwavering commitment to the success of our clients.',
    },
  ];

  const currentPageContent = content[page - 1];

  return (
    <div className="">
      <h1 className="text-[18px] font-semibold text-[#FFFFFF]">
        {currentPageContent.title}
      </h1>
      <p className="text-[16px] text-[#A6A6A6]">{currentPageContent.text}</p>
    </div>
  );
};

const AboutUs = () => {
  const [currPage, setCurrPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrPage(page);
  };

  return (
    <div className="px-6 py-6 lg:mt-0 md:px-10 max-w-[1024px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-start w-full mt-10 rounded-lg p-2 border-[2px] border-[#272B36] bg-[#0B0D0F]">
        <img src="./logo.png" alt="" className="md:w-1/2" />
        <div className="md:w-1/2 h-[250px] flex flex-col justify-between md:py-8">
          <Card page={currPage} />
          <Pagination total={4} initialPage={1} onChange={handlePageChange} />
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row items-center justify-start w-full mt-10 rounded-lg p-2 border-[2px] border-[#272B36] bg-[#0B0D0F]">
        <img
          src="./purpose.png"
          alt="purpose"
          className="md:w-1/2 md:h-auto mb-4 md:mb-0"
        />
        <div className="md:ml-8 md:w-1/2">
          <h1 className="text-[18px] font-semibold text-[#FFFFFF]">
            Our Purpose
          </h1>
          <p className="text-[16px] text-[#A6A6A6]">
            At PBS, we believe our job goes beyond acting as intermediaries. We
            are committed to empowering our clients by providing exceptional
            brokerage services that enable informed decision making and
            strategic trading in the commodities market
          </p>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-start w-full mt-10 rounded-lg p-2 border-[2px] border-[#272B36] bg-[#0B0D0F]">
        <div className=" md:w-1/2">
          <div className="mt-6 mb-3">
            <h1 className="text-[18px] text-center font-semibold text-[#FFFFFF]">
              Our Values
            </h1>
          </div>

          <div className="my-3 lg:my-5">
            <h1 className="text-[16px] font-[500] text-[#FFFFFF]">
              Client Centric
            </h1>
            <p className="text-[16px] text-[#A6A6A6]">
              We place our clients at the forefront of everything we do. We
              believe in cultivating strong relationships, built on trust,
              transparency and mutual respect.
            </p>
          </div>

          <div className="my-3 lg:my-5">
            <h1 className="text-[16px] font-[500] text-[#FFFFFF]">Integrity</h1>
            <p className="text-[16px] text-[#A6A6A6]">
              Our commitment to integrity ensures that we always act in the best
              interests of our clients and for the longevity of the business.
            </p>
          </div>

          <div className="my-3 lg:my-5">
            <h1 className="text-[16px] font-[500] text-[#FFFFFF]">Expertise</h1>
            <p className="text-[16px] text-[#A6A6A6]">
              Expertise underpins our commitment to excellence. We pride
              ourselves on the depth of knowledge and experience we bring to
              every aspect of our work.
            </p>
          </div>

          <div className="my-3 lg:my-5">
            <h1 className="text-[16px] font-[500] text-[#FFFFFF]">
              Innovation
            </h1>
            <p className="text-[16px] text-[#A6A6A6]">
              By embracing innovation, we are committed to staying ahead of the
              curve, pioneering new paths and shaping the future of our
              industry.
            </p>
          </div>

          <div className="my-3 lg:my-5">
            <h1 className="text-[16px] font-[500] text-[#FFFFFF]">
              Sustainability
            </h1>
            <p className="text-[16px] text-[#A6A6A6]">
              Committing to environmentally responsible practices and
              contributing to social and community well-being.
            </p>
          </div>
        </div>

        <img
          src="./values.png"
          alt="values"
          className="md:ml-8 md:w-1/2 md:h-auto mb-4 md:mb-0"
        />
      </div>
      {/* <div className="flex flex-col md:flex-row items-center justify-start w-full mt-10 rounded-lg p-2 border-[2px] border-[#272B36] bg-[#0B0D0F]">
        <img
          src="./vision.png"
          alt="purpose"
          className="md:w-1/2 md:h-auto mb-4 md:mb-0"
        />
        <div className="md:ml-8 md:w-1/2">
          <h1 className="text-[18px] font-semibold text-[#FFFFFF]">
            Our Vision
          </h1>
          <p className="text-[16px] text-[#A6A6A6]">
            To be the trusted partner of choice for commodities traders
            globally, recognised for our expertise, unparalleled support and
            unwavering commitment to the success of our clients.
          </p>
        </div>
      </div> */}
      <h1 className="text-[18px] mt-6 font-semibold text-[#FFFFFF]">
        Our People
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-normal items-center gap-5">
        {ourPeople.map((person) => (
          <People key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
