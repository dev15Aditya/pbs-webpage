import React from 'react';

const data = {
  title: 'Our People',
  text: 'Your trusted partner in navigating the complexities of commodity trading',
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
};

const OurPeople = () => {
  return (
    <div className="min-h-[75vh] lg:min-h-[130vh]  flex flex-col justify- items-center overflow-hidden pb-[150px] relative bg-[#000000]">
      <h1 className="text-[20px] font-semibold text-[#FFFFFF]">{data.title}</h1>
      <div>
        <p className="text-[16px] text-[#A6A6A6] text-center">{data.text}</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-4">
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
