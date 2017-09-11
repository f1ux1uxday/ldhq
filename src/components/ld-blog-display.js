import React, { Component } from 'react'

import QuickeningBlog from './ld-quickening'

// Keep: onClick={this.blogSelector('1')}
class BlogDisplay extends Component {
  displaySelection() {
    if (this.props.blog === '1') {
      return (
        <QuickeningBlog />
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
