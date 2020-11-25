import React, { useState, useEffect, useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { 
  Box,
  Stack,
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
 } from '@chakra-ui/react'
import {IssueForm, Issues, Bucket} from '../components/'
import { IssueContext, UserContext } from '../context'

const Dashboard = ({isLoggedIn}) => {
  const { currentUser } = useContext(UserContext)
  const { issues, setUserIssues, deleteIssue } = useContext(IssueContext)
  const [ projects, setProjects ] = useState(null)
  const [ currentProject, setCurrentProject ] = useState(null)

  if (!isLoggedIn) {
    console.log('no user, redirecting to login page', isLoggedIn, currentUser)
    return <Redirect to="/login" />
  }
  
  const getProjects = async (userId) => {
    const { data } = await axios({
      method: 'get',
      url: `/api/project/${userId}`
    })
    console.log(data)
    return data
  }

  const testIssues = [
    {id: 1, name: 'issue 1'},
    {id: 2, name: 'issue 2'},
    {id: 3, name: 'issue 3'}
  ]
  const testIssues2 = [
    {id: 4, name: 'issue 4'},
    {id: 5, name: 'issue 5'},
    {id: 6, name: 'issue 6'}
  ]
  
  useEffect(() => {
    setUserIssues()
    setProjects(getProjects(currentUser.id))
    if (projects) setCurrentProject(projects[0]) //for now
  }, [])

  return (
    <Box>
      <Menu>
        {console.log('HELLO')}
        <MenuButton as={Button}>
          {currentProject}
        </MenuButton>
        <MenuList>
          <MenuItem>Project 1</MenuItem>
        </MenuList>
      </Menu>>
      <Flex direction="row">
        <Bucket bucketName="In Progress" issues={testIssues} />
        <Bucket bucketName="Complete" issues={testIssues2} />
      </Flex>
    </Box>
  )
}

export default Dashboard

