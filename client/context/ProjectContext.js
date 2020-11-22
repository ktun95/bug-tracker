import React from 'react'
import axios from 'axios'

export const ProjectContext = React.createContext('')

export const fetchProjects = async () => {
    const response = await axios({
      method: 'get',
      url: '/api/project'
    })
    return (response.data)
}