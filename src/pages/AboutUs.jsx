import React, { useState } from 'react';
import { Pagination } from '@nextui-org/react';

const Card = ({ page }) => {
  const content = [
    {
      title: 'Our Purpose',
      text: 'At PBS, we believe our job goes beyond acting as intermediaries. We are committed to empowering our clients by providing exceptional brokerage services that enable informed decision making and strategic trading in the commodities market',
    },
    {
      title: 'Our Values',
      text: {
        'Client Centric':
          'We place our clients at the forefront of everything we do. We believe in cultivating strong relationships, built on trust, transparency and mutual respect.',
        Integrity:
          'Our commitment to integrity ensures that we always act in the best interests of our clients and for the longevity of the business.',
        Expertise:
          'Expertise underpins our commitment to excellence. We pride ourselves on the depth of knowledge and experience we bring to every aspect of our work.',
        Innovation:
          'By embracing innovation, we are committed to staying ahead of the curve, pioneering new paths and shaping the future of our industry.',
        Sustainability:
          'Committing to environmentally responsible practices and contributing to social and community well-being.',
      },
    },
    {
      title: 'Our Vision',
      text: 'To be the trusted partner of choice for commodities traders globally, recognised for our expertise, unparalleled support and unwavering commitment to the success of our clients.',
    },
    {
      title: 'Our People',
      text: 'Meet the dedicated individuals who drive our company forward with passion, expertise and a commitment to excellence.',
      image: [
        'i1.png',
        'i2.png',
        'i3.png',
        'i4.png',
        'i5.png',
        'i6.png',
        'i7.png',
        'i8.png',
        'i9.png',
        'i10.png',
      ],
    },
  ];

  const currentPageContent = content[page - 1];

  return (
    <div className="">
      <h1 className="text-[20px] font-semibold text-[#FFFFFF]">
        {currentPageContent.title}
      </h1>
      {page === 4 ? (
        <div>
          <p className="text-[16px] text-[#A6A6A6]">
            {currentPageContent.text}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4 overflow-auto max-h-[260px]">
            {currentPageContent.image.map((img, index) => (
              <img
                key={index}
                src={`./${img}`}
                alt="people"
                className="w-full"
              />
            ))}
          </div>
        </div>
      ) : page === 2 ? (
        <div className="text-[16px] text-[#A6A6A6] overflow-auto max-h-[260px]">
          {Object.entries(currentPageContent.text).map(([key, value]) => (
            <div key={key}>
              <h2 className="font-semibold text-[#FFFFFF] mt-4">{key}</h2>
              <p>{value}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[16px] text-[#A6A6A6]">{currentPageContent.text}</p>
      )}
    </div>
  );
};

const AboutUs = () => {
  const [currPage, setCurrPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrPage(page);
  };

  return (
    <div className="px-6 py lg:mt-0 md:px-10 max-w-[1024px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-start w-full h-[90vh] lg:h-[80vh] mt-10 rounded-lg p-2 border-[2px] border-[#272B36] bg-[#0B0D0F]">
        <img src="./logo.png" alt="" className="md:w-1/2" />
        <div className="md:w-1/2 h-full flex flex-col justify-between md:py-8">
          <Card page={currPage} />
          <Pagination total={4} initialPage={1} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
