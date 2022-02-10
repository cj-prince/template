import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import ChevronIcon from '../../assets/icons/coolicon.png';
import Eye from '../../assets/icons/eye.png';
import Logo from '../../assets/icons/vblogo.png';
import Background from '../../assets/images/bg.png';
import { BaseInput } from '../../components';

const SignUp = () => {
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
            <Box d="flex" justifyContent="center">
              <Box>
                <Text textAlign="center" fontSize="1.4rem" color="rgba(0, 0, 0, 0.5)" borderRadius="32px">
                  What are you looking for?
                </Text>
                <Flex
                  mt="1rem"
                  w="228px"
                  h="43px"
                  borderRadius="12px"
                  border="2px solid #F9C900"
                  align="center"
                  justify="center">
                  <Text color="brand.black" fontWeight="500" fontSize="21px">
                    I need an Artisan
                  </Text>
                  <Image ml="1.4rem" src={ChevronIcon} />
                </Flex>
              </Box>
            </Box>
            <Text fontWeight="bold" mt="38px" color="brand.black" fontSize="34px">
              Create an account
            </Text>
            <Text mb="20px" mt="1.2rem" fontSize="1.4rem" color="rgba(0, 0, 0, 0.5)">
              Already have an account?
              <Text as="span" ml=".8rem" color="brand.yellow" fontWeight="500" cursor="pointer">
                Sign in
              </Text>
            </Text>
            <Box mb="1rem">
              <BaseInput label="Email address" />
            </Box>
            <Flex mb="1rem" justify="space-between">
              <BaseInput label="First name" />
              <BaseInput label="Last name" />
            </Flex>
            <Box mb="1rem">
              <BaseInput label="Password" rightIcon={<Image src={Eye} mb="13px" />} />
            </Box>
            <BaseInput label="State/Province" />
            <Text fontWeight="normal" mt="10px" color="rgba(0, 0, 0, 0.5)" fontSize="12px">
              By clicking Create account, I agree that I have read and accepted 
              the 
              <Text color="brand.yellow">
                Terms of Use
              </Text> 
              and 
              <Text color="brand.yellow">
                Privacy Policy
              </Text>
            </Text>
            <Flex 
              backgroundColor="#F9C900"
              align="center"
              justify="center"
              w="310px"
              h="49px"
              borderRadius="32px"
              position="absolute"
              marginLeft="75px"
              marginBottom="10px"
              cursor="pointer">
              <Text color="brand.black" fontWeight="500" 
                fontSize="18px">
                Create an account
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export { SignUp };
