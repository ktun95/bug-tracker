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

const SignUp = ({props}) => {
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
            url: '/auth/signup',
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
            <p>Sign Up</p>
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
                    onClick={() => handleSubmit(username, password)}
                >
                    Sign Up
                </Button>
                <Box>
                    <Link to="/login">Login</Link>
                </Box>
            </form>
        </Box>
    )
}

export default SignUp
