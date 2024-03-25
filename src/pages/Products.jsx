import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const data = [
    {
      title: 'Crude oil',
      description:
        'Crude oil, often referenced to as "black gold", is a vital commodity that provides economics worldwide. It is also the world\'s most actively traded commodity.',
    },
    {
      title: 'Fuel oil',
      description:
        'Fuel oil is crucial component of the energy industry, is a derived from crude oil refining. It encompasses a range of heavy distillates that includes bunker fuel and industrial fuel oil.',
    },
    {
      title: 'Middle distillates',
      description:
        'Middle distillates comprises of returned petroleum products in intermediate boiling points common middle distillates include jet fuel (kerosene) and gasoil for powering a wide range of vehicles and machinery.',
    },
    {
      title: 'Gasoline, Naptha',
      description:
        'Gasoline and Naptha are two essential petroleum products derived from the refining of crude oil. Gasoline also known as petrol is primarily used as a fuel for Spart ignition infernal combustion engines in automobiles, motorcycles, etc. \n Naptha is a versatile feedstoke used in various industrial processes and petrochemical applications.',
    },
    {
      title: 'LPG',
      description:
        'Liquefied petroleum gas is a versatile and efficient energy source derived from the refining of crude oil and natural gas processing. LPG is used in a wide range of appications across residential, commercial, industrial and agricultural sectors. In households, it is commonly used for cooking. In commercial settings, it is used as a fuel for restaurants and hotels',
    },
  ];
  return (
    <div className="min-h-[95vh] max-w-[1024px] mx-auto flex flex-wrap justify-center lg:justify-normal items-center gap-5 p-6 md:px-10 lg:px-24">
      <div className="my-6 lg:my-10">
        <h1 className="text-[18px] font-semibold text-[#FFFFFF]">Products</h1>
        <p className="text-[16px] text-[#A6A6A6]">
          Our products cover a wide range of commodities with a focus on energy
          commodities, including crude oil and refined products.
        </p>
      </div>
      {data.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </div>
  );
};

export default Products;
