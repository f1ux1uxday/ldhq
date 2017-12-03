import React, { Component } from 'react'

// Use: onClick={this.blogSelector('1')}
class BlogList extends Component {
  blogSelector(blogID) {
    this.props.selectBlog(blogID)
  }

  render() {
    return (
      <div className='blog-list'>
        <ul id='blog-list'>
          <li id='2' onClick={this.blogSelector.bind(this, '2')}>
            2: for each (<em>game</em> in <em>games</em>)
          </li>
          <li id='1' onClick={this.blogSelector.bind(this, '1')}>
            1: escape('DRM')
          </li>
          <li id='0' onClick={this.blogSelector.bind(this, '0')}>
            0: let read = this.blog()
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogList
