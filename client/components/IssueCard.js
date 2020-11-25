import React from 'react'

const IssueCard = ({id, name}) => {

    const handleDragStart = (e) => {
        const issueId = e.target.id
        e.dataTransfer.setData('text/plain', issueId )
    }

    return (
        <div id={id} draggable="true" onDragStart={handleDragStart}>
            {name}
        </div>
    )
}

export default IssueCard
