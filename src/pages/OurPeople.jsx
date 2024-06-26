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

const ceo = ['CEO-JasperAng.jpg', 'Jasper Ang', 'Chief Executive Officer'];

const OurPeople = () => {
  return (
    <div className="min-h-[75vh] lg:min-h-[130vh] mt-5 flex flex-col justify- items-center overflow-hidden pb-[150px] relative bg-[#000000]">
      {/* <h1 className="text-[28px] tracking-tighter leading-[130%] font-sans font-semibold text-[#f8f8f8] mt-10">
        {data.title}
      </h1> */}
      <div>
        <p className="text-[28px] text-center tracking-tighter leading-[130%] font-sans font-semibold m-3 text-[#FFF] px-5">
          Meet the dedicated individuals who drive our company forward with{' '}
          <br /> passion, expertise and a commitment to excellence.
        </p>
        <div className="w-[240px] my-10 m-auto">
          <Image image={ceo} />
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center my-10 max-w-[1024px] mx-auto">
          {data.image.map((img, index) => (
            <Image key={index} image={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
