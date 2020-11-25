import React from 'react'
import { 
    Editable,
    EditableInput,
    EditablePreview,
    Container,
    Box
} from '@chakra-ui/react'
import { IssueCard } from '../components'

const Bucket = ({bucketName, order, issues}) => {

    const handleDrop = (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData('text/plain')
        e.currentTarget.appendChild(document.getElementById(data))
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }


    return (
        <Container maxWidth="15rem">
            <Editable defaultValue={bucketName}>
                <EditableInput />
                <EditablePreview />
            </Editable>
            <Box onDrop={handleDrop} onDragOver={handleDragOver}>
                {issues.map(i => <IssueCard key={i.id} id={i.id} name={i.name} />)}
            </Box>
        </Container>
    )
}

export default Bucket
