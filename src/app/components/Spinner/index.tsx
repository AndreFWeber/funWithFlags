import React from 'react';
import {
    Box,
    AbsoluteCenter,
    Spinner
  } from '@chakra-ui/react';

const LoadingSpinner = () => {
    return(
        <Box position='relative' h='200px'>
        <AbsoluteCenter p='4' color='white' axis='both'>
            <Spinner />
        </AbsoluteCenter>
        </Box>
    )
}

export default LoadingSpinner
