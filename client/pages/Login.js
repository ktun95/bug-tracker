import React, { useState, useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
  } from "@chakra-ui/core";
import { UserContext } from '../context/UserContext'

const Login = ({props}) => {
    const {currentUser, fetchUser} = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const isLoggedIn = currentUser && currentUser.username !== 'guest'

    const handleUsernameChange  = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange  = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        const user = await axios({
            method: 'post',
            url: '/auth/login',
            data: {
                username, password
            }
        })        
    }
    
    return (
        isLoggedIn ?
        <Redirect to="/dashboard" />
        :
        <Box margin="auto" width="50vw">
            <p>Login</p>
            <form>
                <FormControl isRequired>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input type="email" id="email" value={username} onChange={handleUsernameChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </FormControl>
                <Button
                    // type="submit"
                    mt={4}
                    variantColor="teal"
                    // isLoading={formState.isSubmitting}
                    onClick={() => fetchUser(username, password)}
                >
                    Login
                </Button>
                <Box>
                    <Link to="/signup">Sign up</Link>
                </Box>
            </form>
        </Box>
    )
}

export default Login
