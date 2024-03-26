import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from '@nextui-org/react';
import ProfileCard from './ProfileCard';

export default function People({ person }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState('4xl');

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <Button
        className="h-[300px] bg-[#0B0D0F]  border-[2px] border-solid border-[#151718]"
        onPress={onOpen}
        onPressUp={() => handleOpen('4xl')}
      >
        <ProfileCard
          name={person.name}
          img={person.image}
          pos={person.position}
        />
      </Button>
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#0B0D0F] border-[2px] border-solid border-[#151718]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {person.name}
              </ModalHeader>
              <Divider className="bg-[#151718]" />
              <ModalBody style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {person.description.split('\n').map((item, i) => (
                  <p key={i} className="text-[16px] text-[#A6A6A6]">
                    {item}
                  </p>
                ))}
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className=" border-[2px] border-solid border-[#151718]"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
