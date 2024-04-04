import React, { useState } from 'react';
import VerticalCarousel from '../components/VerticalCarousel';

const crudeOil = [
  {
    title: 'Crude Oil',
    image: 'Crude Oil.jpg',
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
    title: 'Naphtha',
    image: 'Naphtha.jpg',
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
    image: 'Gasoline.jpg',
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
    image: 'Middle Distillates.jpg',
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
    image: 'Fuel Oil.jpg',
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
    image: 'Iron Ore.jpg',
    hoveredText: ['Outright', 'Inter-month Spreads'],
    text: ['SGX TSI Iron Ore CFR China', '(62% Fe Fines)'],
  },
];

const Products = () => {
  const [products, setProducts] = useState(crudeOil);
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
        <VerticalCarousel height={500} children={products}></VerticalCarousel>
      </div>
    </div>
  );
};

export default Products;
