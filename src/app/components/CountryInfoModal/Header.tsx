import React from 'react';
import {
    ModalHeader,
    Img,
    Flex
  } from '@chakra-ui/react';

const Header = () => {
    return(
        <ModalHeader>
            <Flex justify="center" align="center" width="100%">
                <Img
                    borderRadius='full'
                    objectFit='contain'
                    boxSize='150px'
                    src='/fun_with_flags.png'
                    alt='AI generated fun with flags logo'
                />
            </Flex>
        </ModalHeader>
    )
}

export default Header