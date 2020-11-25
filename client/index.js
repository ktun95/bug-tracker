import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from "@chakra-ui/react";
import  { UserContext, UserProvider } from './context/UserContext'
import App from './App'

ReactDOM.render(
    <UserProvider>
        <ChakraProvider>
                <App />
        </ChakraProvider>
    </UserProvider>,
    document.getElementById('mountNode')
)