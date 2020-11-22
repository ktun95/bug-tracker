import React, { useState }  from 'react'
import { Flex, Box } from '@chakra-ui/core'

const Issues = ({issues, setUserIssues, deleteIssue}) => {

    const deleteUserIssue = async id => {
        console.log('deleting issue ', id, '...')
        const deleted = await deleteIssue(id)
        console.log(deleted)
        setUserIssues()
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Assignees</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue) => {
                        return (
                            <tr key={issue.id}>
                                <td>{issue.id}</td>
                                <td>{issue.subject}</td>
                                <td>{issue.description}</td>
                                <td>unassigned</td>
                                <td
                                    style={{color: "red"}}
                                    onClick={() => deleteUserIssue(issue.id)}
                                >delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Issues
