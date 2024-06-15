// src/components/Header.tsx
'use client'

import React, { useState } from 'react';
import {
    Flex,
    Box,
    Text,
    Avatar,
  } from '@chakra-ui/react';

enum ModalBox {
  userName = 0,
  jobTitle = 1,
}
 
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();

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
        <Box as="img" src="/fun_with_flags.png" alt="Fun with Flags Logo" boxSize="40px" mr="4" />
        <Text fontSize="xl" fontWeight="bold">Fun with Flags</Text>
      </Box>
      <Avatar name={user.username} />
    </Flex>
  );
};

export default Header;
