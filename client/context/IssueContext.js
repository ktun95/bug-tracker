import React from 'react'
import axios from 'axios'

export const IssueContext = React.createContext('')

export const fetchIssues = async () => {
    const response = await axios({
      method: 'get',
      url: '/api/issue'
    })
    return (response.data)
}

export const deleteIssue = async (id) => {
  const response = await axios({
    method: 'delete',
    url: `/api/issue/${id}`
  })
  return (response.data)
}