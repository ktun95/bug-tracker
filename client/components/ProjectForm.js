import React, { useState, useContext } from 'react'
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
  import { ProjectContext } from '../context'

const ProjectForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { setUserProjects } = useContext(ProjectContext)
    
    const handleNameChange  = (e) => {
        setName(e.target.value)
    }

    const handleDescriptionChange  = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = async () => {
        if (!name.length || !description.length) return

        const project = await axios({
            method: 'post',
            url: '/api/project',
            data: {
                name, description, 
            }
        })

        setUserProjects()
    }

    return (
        <Box>
            <form>
            <FormControl isRequired>
                <FormLabel> Project Subject </FormLabel>
                <Input id="Project-subject" value={name} onChange={handleNameChange} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel> Description </FormLabel>
                <Input id="Description" value={description} onChange={handleDescriptionChange} />
            </FormControl>
            <Button onClick={handleSubmit}>
                Submit Project
            </Button>
            </form>
        </Box>
    )
}

export default ProjectForm
