import React from 'react';
import Image from '../components/Image';

const data = {
  title: 'Our People',
  text: 'Meet the dedicated individuals who drive our company forward with passion, expertise and a commitment to excellence',
  image: [
    // 'CEO-JasperAng.jpg',
    ['Head of Derivatives - Louis Lui.jpg', 'Louis Lui', 'Head of Derivatives'],
    ['Head of Physical - Ivan Chang.jpg', 'Ivan Chang', 'Head of Physical'],
    [
      'Head of Compliance - Christopher Mansfield.jpeg',
      'Christopher Mansfield',
      'Head of Compliance',
    ],
    [
      'Chief Administrative Officer - Grace Kuang.jpg',
      'Grace Kuang',
      'Chief Administrative Officer',
    ],
    [
      'Head of Crude Oil - S.Ramanathan.jpg',
      'S.Ramanathan',
      'Head of Crude Oil',
    ],
    ['Senior Broker - Kenny Chong.jpg', 'Kenny Chong', 'Senior Broker'],
    ['Broker - Louis Teo.jpg', 'Louis Teo', 'Broker'],
    ['Broker - Jannie Kwak (Jaeeun).jpg', 'Jannie Kwak (Jaeeun)', 'Broker'],
    [
      'Compliance Officer - Cindy Kuang.jpg',
      'Cindy Kuang',
      'Compliance Officer',
    ],
    [
      'Operations Executive - Cindy Chua.jpg',
      'Cindy Chua',
      'Operations Executive',
    ],
  ],
};

const ceo = ['CEO-JasperAng.jpg', 'Jasper Ang', 'CEO'];

const OurPeople = () => {
  return (
    <div className="min-h-[75vh] lg:min-h-[130vh]  flex flex-col justify- items-center overflow-hidden pb-[150px] relative bg-[#000000]">
      <h1 className="text-[28px] tracking-tighter leading-[130%] font-sans font-semibold text-[#f8f8f8] mt-10">
        {data.title}
      </h1>
      <div>
        <p className="text-[20px] px-5 pt-5 lg:text-[24px] text-[#808080] tracking-tighter leading-[130%] font-[500] text-center">
          {data.text}
        </p>
        <div className="w-[240px] my-10 m-auto">
          <Image image={ceo} />
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center my-10">
          {data.image.map((img, index) => (
            <Image key={index} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
