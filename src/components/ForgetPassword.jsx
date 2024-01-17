import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
function ForgetPassword() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Forget Password!</Heading>

          <Input
            placeholder="Email"
            required
            type="email"
            focusBorderColor="purple.600"
          ></Input>

          <Button colorScheme="purple" type="submit">
            {' '}
            Send{' '}
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default ForgetPassword;
