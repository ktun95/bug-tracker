import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext(null)

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({username: 'guest'})

    const fetchUser = async (username, password) => {
        console.log('fetching user...')
        try {
            const { data } = await axios({
                method: 'post',
                url: '/auth/login',
                data: {
                    username, password
                }
            })

            setCurrentUser({username: data.username})
        } catch (err) {
            console.error(err)
        } 
    }

    return (
        <UserContext.Provider value={{currentUser, fetchUser}}>
            {props.children}
        </UserContext.Provider>
    )
}