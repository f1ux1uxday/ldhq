import React from 'react'
import { Link } from 'react-router-dom'

const WorkLink = () => {
    return (
        <Link to='/projects'>
            <div className='work-link'>
                <h4 id='work-text'>
                    PROJECTS
                </h4>
            </div>
        </Link>
    )
}

export default WorkLink
