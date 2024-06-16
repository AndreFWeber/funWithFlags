import React from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
  } from '@chakra-ui/react';

const ErrorMessage = () => {
    return(
        <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Something went - very - wrong!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                We are probably working on a fix and we should be back as soon as possible. Thanks.
            </AlertDescription>
        </Alert>
    )
}

export default ErrorMessage
