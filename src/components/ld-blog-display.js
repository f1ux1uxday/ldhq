import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'

import ReadThisBlog from './blogs/ld-readthisblog'
import EscapeDRMBlog from './blogs/ld-escapeblog'
import ForEachBlog from './blogs/ld-foreachblog'
import FreeCodeBlog from './blogs/ld-freecodecamp'

// Keep: onClick={this.blogSelector('1')}
class BlogDisplay extends Component {
    displaySelection() {
        if (this.props.blog === '0') {
            return (
                <ReadThisBlog />
            )
        }
        if (this.props.blog === '1') {
            return (
                <EscapeDRMBlog />
            )
        }
        if (this.props.blog === '2') {
            return (
                <ForEachBlog />
            )
        }
        if (this.props.blog === '3') {
            return (
                <FreeCodeBlog />
            )
        }
    }

    // viewBlogByUrl() {

    // }

    render() {
        return (
            <div className='blog-display'>
                {this.displaySelection()}
            </div>
        )
        // return (
            // <div className='blog-display'>
                // <Switch>
                    // <Route path='/0' component={ReadThisBlog} />
                    // <Route path='/blog/1' exact component={EscapeDRMBlog} />
                    // <Route path='2' exact component={ForEachBlog} />
                    // <Route path='3' exact component={FreeCodeBlog} />
                // </Switch>
            // </div>
        // )
    }
}

export default BlogDisplay
