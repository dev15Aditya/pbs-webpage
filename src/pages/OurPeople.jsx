import React from 'react';

const data = {
  title: 'Our People',
  text: 'Your trusted partner in navigating the complexities of commodity trading',
  image: [
    'CEO-JasperAng.jpg',
    'Head of Crude Oil - S.Ramanathan.jpg',
    'Chief Administrative Officer - Grace Kuang.jpg',
    'Head of Derivatives - Louis Lui.jpg',
    'Head of Compliance - Christopher Mansfield.jpeg',
    'Head of Physical - Ivan Chang.jpg',
    'Operations Executive - Cindy Chua.jpg',
    'Compliance Officer - Cindy Kuang.jpg',
    'Senior Broker - Kenny Chong.jpg',
    'Broker - Jannie Kwak (Jaeeun).jpg',
    'Broker - Louis Teo.jpg',
  ],
};

const OurPeople = () => {
  return (
    <div className="min-h-[75vh] lg:min-h-[130vh]  flex flex-col justify- items-center overflow-hidden pb-[150px] relative bg-[#000000]">
      <h1 className="text-[23px] tracking-tighter leading-[130%] font-sans font-semibold text-[#f8f8f8] mt-10">
        {data.title}
      </h1>
      <div>
        <p className="text-[18px] text-[#808080] tracking-tighter leading-[130%] font-[500] text-center">
          {data.text}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-4 mt-10">
          {data.image.map((img, index) => (
            <img
              key={index}
              src={`./${img}`}
              alt="people"
              className="w-full md:max-w-none"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
