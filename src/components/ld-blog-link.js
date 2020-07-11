import React from 'react'
import { Link } from 'react-router-dom'

const BlogLink = () => {
    return (
        <Link to='/blog'>
            <div className='blog-link'>
                <h4 id='blog-head-text'>
                    BLOG
                </h4>
            </div>
        </Link>
    )
}

export default BlogLink
