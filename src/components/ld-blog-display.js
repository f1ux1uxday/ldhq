import React, { Component } from 'react'

import ReadThisBlog from './blogs/ld-readthisblog'
import EscapeDRMBlog from './blogs/ld-escapeblog'

// Keep: onClick={this.blogSelector('1')}
class BlogDisplay extends Component {
  displaySelection() {
    if (this.props.blog === '1') {
      return (
        <ReadThisBlog />
      )
    }
    if (this.props.blog === '2') {
      return (
        <EscapeDRMBlog />
      )
    }
  }

  render() {
    return (
      <div className='blog-display'>
        {this.displaySelection()}
      </div>
    )
  }
}

export default BlogDisplay
