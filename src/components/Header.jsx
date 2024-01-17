import React, { Fragment } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { BiMenuAltLeft } from 'react-icons/bi';
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              left={'0'}
              bottom={'10'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to={'/sign-up'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
