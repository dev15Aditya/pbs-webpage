import React, { useState } from 'react';

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="overflow-hidden  bg-[#0B0D0F] border-[2px] border-solid border-[#151718] rounded-3xl mt-8 p-5">
      <h1 className="text-[28px] tracking-tighter leading-[130%] font-sans font-semibold text-[#f8f8f8] mb-4">
        {data.title}
      </h1>
      <div
        className="flex min-w-[320px] h-[180px] md:h-[50vh] max-h-[390px] lg:h-[70vh]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`./${data.image}`}
          alt="crude"
          className="w-[70%] h- rounded-3xl mr-4"
        />
        <div className="flex flex-col lg:justify-center lg:gap-y-5 w-[30%] overflow-auto">
          {isHovered
            ? data.hoveredText.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] md:text-[24px] text-left text-[#808080] tracking-tighter leading-[130%] font-[500] list-none underline"
                >
                  {item}
                </li>
              ))
            : data.text.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] md:text-[24px] text-left text-[#808080] tracking-tighter leading-[130%] font-semibold list-none underline"
                >
                  {item}
                </li>
              ))}
        </div>
      </div>
    </div>
  );
};

const crudeOil = [
  {
    title: 'Crude Oil',
    image: 'crude.jpeg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'EFS',
      'DFL',
      'WTI/Brent',
      'Brent/Dub ai',
      'Murban/Dubai',
      'Oman/Dubai',
    ],
    text: [
      'Brent Swap',
      'Dubai Swap',
      'WTI Swap',
      'Dated Brent Swap',
      'Murban Swap',
      'Oman Swap',
    ],
  },
  {
    title: 'Naptha',
    image: 'naptha.jpeg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'East-West Spreads',
      'Gas/Nap',
    ],
    text: ['MOPJ', 'NWE Naphtha'],
  },
  {
    title: 'Gasoline',
    image: 'gasoline.jpeg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'Inter-Ron',
      'East-West Spreads',
      'Gas/Nap',
    ],
    text: ['Sing 92Ron', 'Sing 95Ron', 'Sing 97Ron', 'EBOB Swap', 'RBOB Swap'],
  },
  {
    title: 'Middle Distillates',
    image: 'mid.jpeg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'Regrade',
      'East-West Spreads',
      'Diff',
      'EFS',
    ],
    text: ['Sing Gasoil (10ppm)', 'Sing Jet Kero', '0.5% Sulphur Gasoil'],
  },
  {
    title: 'Fuel Oil',
    image: 'fuel.jpeg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'Visco',
      'East-West Spreads',
      'HI5',
    ],
    text: [
      'Sing LSFO Marine 0.5%',
      'Sing HSFO 380cst',
      'Sing HSFO 180cst',
      'Rdam LSFO Marine 0.5%',
      'Rdam Barges',
    ],
  },
  {
    title: 'Iron Ore',
    image: 'iron.jpeg',
    hoveredText: ['Outright', 'Inter-month Spreads'],
    text: ['SGX TSI Iron Ore CFR China', '(62% Fe Fines)'],
  },
];

const Products = () => {
  // const data = [
  //   {
  //     title: 'Crude oil',
  //     description:
  //       'Crude oil, often referenced to as "black gold", is a vital commodity that provides economics worldwide. It is also the world\'s most actively traded commodity.',
  //   },
  //   {
  //     title: 'Fuel oil',
  //     description:
  //       'Fuel oil is crucial component of the energy industry, is a derived from crude oil refining. It encompasses a range of heavy distillates that includes bunker fuel and industrial fuel oil.',
  //   },
  //   {
  //     title: 'Middle distillates',
  //     description:
  //       'Middle distillates comprises of returned petroleum products in intermediate boiling points common middle distillates include jet fuel (kerosene) and gasoil for powering a wide range of vehicles and machinery.',
  //   },
  //   {
  //     title: 'Gasoline, Naptha',
  //     description:
  //       'Gasoline and Naptha are two essential petroleum products derived from the refining of crude oil. Gasoline also known as petrol is primarily used as a fuel for Spart ignition infernal combustion engines in automobiles, motorcycles, etc. \n Naptha is a versatile feedstoke used in various industrial processes and petrochemical applications.',
  //   },
  //   {
  //     title: 'LPG',
  //     description:
  //       'Liquefied petroleum gas is a versatile and efficient energy source derived from the refining of crude oil and natural gas processing. LPG is used in a wide range of appications across residential, commercial, industrial and agricultural sectors. In households, it is commonly used for cooking. In commercial settings, it is used as a fuel for restaurants and hotels',
  //   },
  // ];
  return (
    <div className="min-h-[95vh] max-w-[1024px] mx-auto flex flex-wrap justify-center lg:justify-center items-center gap-5 py-6">
      <div className="my-6 text-center">
        <h1 className="text-[28px] tracking-tighter leading-[130%] font-sans font-semibold text-[#f8f8f8]">
          See all we do
        </h1>
        <p className="text-[24px] text-center text-[#808080] tracking-tighter leading-[130%] font-[500]">
          Our products cover a wide range of commodities with focus on energy
          commodities, including crude oil and refined products.
        </p>
      </div>

      <div className="w-full mx-auto">
        {crudeOil.map((product, index) => (
          <Card key={index} data={product} />
        ))}
      </div>

      {/* <div>
        <img src="./service.png" alt="service" className="rounded" />
      </div> */}
      {/* <div className="my-6 lg:my-10">
        <h1 className="text-[18px] font-semibold text-[#FFFFFF]">Products</h1>
        <p className="text-[16px] text-[#A6A6A6]">
          Our products cover a wide range of commodities with a focus on energy
          commodities, including crude oil and refined products.
        </p>
      </div>
      {data.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))} */}
    </div>
  );
};

export default Products;
