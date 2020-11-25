import React, { useState, useContext, useEffect } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {PrivateRoute, TaskBar, IssueForm} from './components'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import { UserContext, IssueContext, fetchIssues, deleteIssue } from './context'

const Main = () => {
    const [issues, setIssues] = useState([])
    const { currentUser, fetchUser } = useContext(UserContext)
    const isLoggedIn = currentUser && currentUser.username !== 'guest'

    useEffect(()=> {
        fetchUser()
    }, [])

    const setUserIssues = async () => {
        console.log('fetching issues...')
        const newIssues = await fetchIssues()
        setIssues(newIssues)
    }

    return (
        <Flex>
            <Router>
                <Route exact path="/">
                    {isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <IssueContext.Provider value={{issues, setUserIssues, deleteIssue}}>
                    <Box width="100%" padding="0.5rem">
                        <Route path="/dashboard/issues/create" component={IssueForm} />
                        <Route exact path="/dashboard/" render={() => {
                            return <Dashboard isLoggedIn={isLoggedIn} />
                        }} />
                    </Box>
                </IssueContext.Provider>
            </Router>
        </Flex>
    )
}

export default Main
