import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button, Text } from "@chakra-ui/core";
import { UserContext } from '../context'

const TaskBar = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <Box 
            height="100vh" 
            padding="1rem" 
            backgroundColor="black"
            color="white"
            // minWidth=
        >
            <Text>{currentUser.username}</Text>
            <Stack>
                <Link to="/dashboard/issues">
                    Home
                </Link>
                <Link to="/dashboard/issues/create/">
                    + Issue
                </Link>
                <Link to="/dashboard/projects/create">
                    + Project
                </Link>
            </Stack>
        </Box>
    )
}

export default TaskBar
