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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator } from "@chakra-ui/core"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
// } from "@chakra-ui/react"
import {IssueForm, Issues} from '../components/'
import { IssueContext, UserContext } from '../context'

const BreadcrumbNameMap = {
  '/dashboard': 'Dashboard',
  '/dashboard/issues': 'Issues',
  '/dashboard/issues/create': 'Create',
  '/dashboard/resolved': 'Resolved',
}

const Dashboard = ({isLoggedIn}) => {
  const { currentUser } = useContext(UserContext)

  if (!isLoggedIn) {
    console.log('no user, redirecting to login page', isLoggedIn, currentUser)
    return <Redirect to="/login" />
  }

  const { issues, setUserIssues, deleteIssue } = useContext(IssueContext)
  
  useEffect(() => {
    setUserIssues()
  }, [])

  return (
    <Box>
      <Route>
        {({location}) => {
           const pathnames = location.pathname.split('/').filter((x) => x)
          return (
            <Breadcrumb>
              {pathnames.map((val, idx) => {
                const uri = `/${pathnames.slice(0, idx + 1).join('/')}`
                
                return (
                  <BreadcrumbItem key={val}>
                    <BreadcrumbLink as={Link} to={uri}>
                      {BreadcrumbNameMap[uri]}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )
              })}
            </Breadcrumb>
          )}}
      </Route>
      <Route>
        <Issues
          issues={issues}
          setUserIssues={setUserIssues}
          deleteIssue={deleteIssue}
        />
      </Route>
    </Box>
  )
}

export default Dashboard

