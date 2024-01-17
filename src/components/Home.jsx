import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'cursive',
  p: '4',
  size: ['2xl','4xl'],
};
function Home() {
  return (
    <Box>
      <CustomCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
          textAlign={'center'}
        >
          Welcome to Video Hub!
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
          ></Image>
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={['center','start']}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            quia doloribus qui, quod quos rerum inventore commodi, aut dolorem
            obcaecati accusamus! Error fugit, eius recusandae, voluptas
            similique temporibus at, magnam alias ipsa labore atque officiis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            quia doloribus qui, quod quos rerum inventore commodi, aut dolorem
            obcaecati accusamus! Error fugit, eius recusandae, voluptas
            similique temporibus at, magnam alias ipsa labore atque officiis!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const CustomCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} objectFit={'cover'} />

      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} objectFit={'cover'} />

      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />

      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Game on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />

      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Light Vs Dark Mode
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
