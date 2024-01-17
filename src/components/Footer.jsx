import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';
function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} px={'4'} w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','start']}>
            Subscribe to get updates!
          </Heading>
          <HStack py={'2'} borderBottom={'2px solid white'}>
            <Input
              placeholder="Email"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button p={'0'} colorScheme="purple" variant={'ghost'}>
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          borderBottom={['2px solid white','none']}
          paddingBottom={['12px','none']}
        >
          <Heading textTransform={'uppercase'}>Video Hub</Heading>
          <Text>All rights reserved.</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Link
          </Heading>
         <HStack>
         <a
            href="https://www.facebook.com/profile.php?id=100009234761198"
            target="blank"
          >
            <AiFillFacebook size={40} color="3b5998" />
          </a>
          <a
            href="https://www.linkedin.com/in/justin-roy-4817551ba/"
            target="blank"
          >
            <AiFillLinkedin size={40} color="0077b5" />
          </a>
          <a
            href="https://twitter.com/roysunny951"
            target="blank"
          >
            <AiFillTwitterCircle size={40} color='1DA1F2' />
          </a>
          <a
            href="https://github.com/Justin-roy"
            target="blank"
          >
            <AiFillGithub size={40} color="2b3137" />
          </a>
         </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
