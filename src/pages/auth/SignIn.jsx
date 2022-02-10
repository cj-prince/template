import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import ChevronIcon from '../../assets/icons/coolicon.png';
import Eye from '../../assets/icons/eye.png';
import Logo from '../../assets/icons/vblogo.png';
import Background from '../../assets/images/bg.png';
import { BaseInput } from '../../components';

const SignIn = () => {
  return (
    <>
      <Box
        backgroundSize="cover"
        bgImg={`url(${Background})`}
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100%">
        <Flex p="61px 141px 0px 157px" justify="space-between">
          <Box d="flex" alignItems="center">
            <Image w="230px" h="58px" src={Logo} alt="logo" />
          </Box>
          <Box pl="68px" pr="68px" w="579px" h={{ xl: '710px', lg: '610px' }} bg="#fff" pt="2.6rem">
            <Text fontWeight="bold" mt="38px" color="brand.black" fontSize="34px">
              Sign In
            </Text>
            <Text mb="20px" mt="1.2rem" fontSize="1.4rem" color="rgba(0, 0, 0, 0.5)">
              New user?
              <Text as="span" ml=".8rem" color="brand.yellow" fontWeight="500" cursor="pointer">
                Create an account
              </Text>
            </Text>
            <Box mb="1rem">
              <BaseInput label="Email address" />
            </Box>
            <Box mb="1rem">
              <BaseInput label="Password" rightIcon={<Image src={Eye} mb="13px" />} />
            </Box>
            <Text
              background="#F9C900" borderRadius="32px"
              w="132px"
              h="35px" 
              // borderRadius="32px"
            >
              <Continue>Continue</Continue>
            </Text>
            
            <Flex 
              backgroundColor="#F9C900"
              align="center"
              justify="center"
              w="310px"
              h="49px"
              borderRadius="32px"
              position="absolute"
              marginLeft="75px">
              <Text color="brand.black" fontWeight="500" 
                fontSize="18px">
                Continue with Google
              </Text>
              <Text color="brand.black" fontWeight="500" 
                fontSize="18px">
                Continue with Facebook
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export { SignIn };
