import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BlogList extends Component {

    render() {
        return (
            <div className='blog-list-block'>
                <ul className='blog-list'>
                    <li className='blog-list-link' id='3'>
                        <Link to='/blog/3'>
                            3: reflect.get(experience)
                        </Link>
                    </li>
                    <li className='blog-list-link' id='2'>
                        <Link to='/blog/2'>
                            2: games.forEach(game =&gt; play())
                        </Link>
                    </li>
                    <li className='blog-list-link' id='1'>
                        <Link to='/blog/1'>
                            1: escape('DRM')
                        </Link>
                    </li>
                    <li className='blog-list-link' id='0'>
                        <Link to='/blog/0'>
                            0: fs.readFile('thisBlog', 'utf8')
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BlogList
