import { Button } from '@chakra-ui/react';
import React from 'react';

const BaseButton = ({ id, children, onClick, width, ...rest }) => {
  return (
    <Button
      className="btn"
      id={id}
      display="flex"
      w={width || '31rem'}
      h="4.2rem"
      justifyContent="center"
      alignItems="center"
      color="black"
      borderRadius="3px"
      fontSize="1.4rem"
      bg="brand.yellow"
      onClick={onClick}
      _hover={{ opacity: '0.8' }}
      _disabled={{
        backgroundColor: '#939AA3',
        cursor: 'not-allowed'
      }}
      {...rest}>
      {children}
    </Button>
  );
};

export { BaseButton };
