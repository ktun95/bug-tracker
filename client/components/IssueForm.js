import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
  } from "@chakra-ui/react";
  import { IssueContext } from '../context'

const IssueForm = () => {
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const { setUserIssues } = useContext(IssueContext)
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    const handleSubjectChange  = (e) => {
        setSubject(e.target.value)
    }

    const handleDescriptionChange  = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = async () => {
        if (!subject.length || !description.length) return

        const issue = await axios({
            method: 'post',
            url: '/api/issue',
            data: {
                subject, description, 
            }
        })
        
        setUserIssues()
        setIsSubmitted(true)
    }

    return (
        isSubmitted ? <Redirect to="/dashboard" /> :
        <Box>
            <form>
            <FormControl isRequired>
                <FormLabel> Issue Subject </FormLabel>
                <Input id="issue-subject" value={subject} onChange={handleSubjectChange} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel> Description </FormLabel>
                <Input id="Description" value={description} onChange={handleDescriptionChange} />
            </FormControl>
            <Button onClick={handleSubmit}>
                Submit Issue
            </Button>
            </form>
        </Box>
    )
}

export default IssueForm
