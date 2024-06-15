import React from 'react';
import {
    Input,
    FormControl,
    FormLabel,
    Box,
  } from '@chakra-ui/react';
import { useUser } from '../../context/UserContext';

const JobTitleBox = () => {
    const { user, setUSer } = useUser();

    return(
        <Box>
            <FormControl>
                <FormLabel>Job Title</FormLabel>
                <Input
                    placeholder="Enter your job title"
                    maxLength={20}                    
                    value={user.jobTitle}
                    onChange={(e) => setUSer({...user, jobTitle: e.target.value})}
                />
            </FormControl>
        </Box>
    )
}

export default JobTitleBox
