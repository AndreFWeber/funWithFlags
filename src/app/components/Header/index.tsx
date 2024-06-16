// src/components/Header.tsx
'use client'

import React from 'react';
import {
    Flex,
    Box,
    Text,
    Avatar,
    Button
  } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <Flex
      as="header"
      width="100%"
      padding="4"
      bg="gray.800"
      color="white"
      align="center"
      justify="space-between"
    >
      <Box display="flex" alignItems="center">
        <Box as="img" src="/logo.png" alt="Fun with Flags Logo" boxSize="40px" mr="4" />
        <Text fontSize="xl" fontWeight="bold">Fun with Flags</Text>
      </Box>
      <Button onClick={() =>{router.push('/login')}} variant="unstyled">
        <Flex>
          <Avatar name={user.username}/>
          <Box ml='3'>
            <Text fontWeight='bold'>
              {user.username}
            </Text>
            <Text fontSize='sm'>{user.jobTitle}</Text>
          </Box>
        </Flex>
      </Button>
    </Flex>

  );
};

export default Header;
