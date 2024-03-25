import React from 'react';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

export default function ProductCard({ data }) {
  console.log(data);
  return (
    <Card className="max-w-[400px] bg-[#0B0D0F] border-[2px] border-solid border-[#151718]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md text-[#FFFFFF] text-[18px] font-semibold">
            {data.title}
          </p>
        </div>
      </CardHeader>
      <Divider className="bg-[#151718]" />
      <CardBody>
        <p className="text-[#A6A6A6] text-[16px]">{data.description}</p>
      </CardBody>
    </Card>
  );
}
