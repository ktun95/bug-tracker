import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from "@chakra-ui/core";
import  { UserContext, UserProvider } from './context/UserContext'
import App from './App'

ReactDOM.render(
    <UserProvider>
        <ThemeProvider>
                <App />
        </ThemeProvider>
    </UserProvider>,
    document.getElementById('mountNode')
)