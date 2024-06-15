import React from 'react';
import {
    Input,
    FormControl,
    FormLabel,
    Box,
  } from '@chakra-ui/react';
import { useUser } from '../../context/UserContext';

const UsernameBox = () => {
    const { user, setUSer } = useUser();

    return(
        <Box>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                    placeholder="Enter your username"
                    value={user.username}
                    onChange={(e) => setUSer({...user, username: e.target.value})}
                />
            </FormControl>
        </Box>
    )
}

export default UsernameBox
