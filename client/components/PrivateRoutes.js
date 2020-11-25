import React, { useContext } from 'react';
        import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const PrivateRoute = ({ fallback, path, component }) => {
    const { currentUser } = useContext(UserContext)
    const isLoggedIn = (currentUser && currentUser.username !== 'guest')

    return (
        isLoggedIn ?
            <Route path={path} component={component} />
            :
            <Redirect to={fallback} />
    )
}

export default PrivateRoute
