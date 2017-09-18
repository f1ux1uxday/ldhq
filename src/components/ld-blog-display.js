import React, { Component } from 'react'

import ReadThisBlog from './ld-readthisblog'

// Keep: onClick={this.blogSelector('1')}
class BlogDisplay extends Component {
  displaySelection() {
    if (this.props.blog === '1') {
      return (
        <ReadThisBlog />
      )
    }
    if (this.props.blog !== '1') {
      return (
        <div>
          WTF m8
        </div>
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
