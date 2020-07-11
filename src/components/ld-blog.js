import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import BlogList from './ld-blog-list'
import ReadThisBlog from './blogs/ld-readthisblog'
import EscapeDRMBlog from './blogs/ld-escapeblog'
import ForEachBlog from './blogs/ld-foreachblog'
import FreeCodeBlog from './blogs/ld-freecodecamp'

class Blog extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/blog'>
                    <div className='blog'>
                        <div className='blog-index'>
                            <h4 id='blog-head-index'>BLOG</h4>
                            <BlogList />
                        </div>
                    </div>
                </Route>
                <Route path='/blog/0'>
                    <div className='blog-display'>
                        <ReadThisBlog />
                    </div>
                </Route>
                <Route path='/blog/1'>
                    <div className='blog-display'>
                        <EscapeDRMBlog />
                    </div>
                </Route>
                <Route path='/blog/2'>
                    <div className='blog-display'>
                        <ForEachBlog />
                    </div>
                </Route>
                <Route path='/blog/3'>
                    <div className='blog-display'>
                        <FreeCodeBlog />
                    </div>
                </Route>
            </Switch>
        )
    }
}

export default Blog
