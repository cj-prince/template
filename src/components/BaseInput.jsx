import { Box, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React from 'react';

export const BaseInput = ({
  label,
  placeholder,
  id,
  type,
  readonly,
  rightIcon,
  width,
  ...rest
}) => {
  return (
    <Box>
      <Text fontSize="1rem" color="rgba(0, 0, 0, 0.5)" as="label" htmlFor={id}>
        {label}
      </Text>
      <InputGroup>
        <Input
          focusBorderColor="none"
          fontSize="1.3rem"
          id="password"
          type={type}
          border="none"
          borderBottom="1px solid rgba(0, 0, 0, 0.25);"
          w={width || '100%'}
          px="1.6rem"
          placeholder={placeholder}
          h="25px"
          readOnly={readonly}
          _focus={{ borderBottom: '2px solid #F9C900' }}
          {...rest}
          className="inputType"
        />
        <InputRightElement top="50%" transform="translateY(-30%)" right="1rem">
          {rightIcon}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
