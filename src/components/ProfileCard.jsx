import React from 'react';
import { Card, CardFooter, CardBody, Image, Divider } from '@nextui-org/react';

export default function ProfileCard({ name, img, pos }) {
  return (
    <Card className="py-4  max-w-[220px] bg-[#0B0D0F]">
      <CardBody className="py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={200}
        />
      </CardBody>

      <Divider className="bg-[#151718]" />

      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase text-[#FFFFFF] font-bold">{name}</p>
        <small className="text-[#A6A6A6]">{pos}</small>
      </CardFooter>
    </Card>
  );
}
