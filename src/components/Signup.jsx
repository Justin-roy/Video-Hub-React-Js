import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
     <form>
        <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full','96']}
        m={'auto'}
        my={'16'}
        >
            <Heading alignSelf={'center'} color='purple.400'>Video Hub</Heading>
            <Avatar alignSelf={'center'} boxSize={'24'}/>
            <Input placeholder='Name' required type='text' focusBorderColor='purple.600'></Input>
            <Input placeholder='Email' required type='email' focusBorderColor='purple.600'></Input>
            <Input placeholder='Password' required type='password' focusBorderColor='purple.600'></Input>

            <Button colorScheme='purple' type='submit'> SignUp </Button>

            <Text textAlign={'right'}>Old User? {''}
            <Button variant={'link'} colorScheme='purple'>
                <Link to={'/login'}>Log In</Link>
            </Button>
            </Text>

        </VStack>
     </form>
    </Container>
  )
}

export default Signup