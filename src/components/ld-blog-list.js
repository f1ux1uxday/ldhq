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
          <li id='1' onClick={this.blogSelector.bind(this, '1')}>
            1: let read = this.blog()
          </li>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
          <li>

          </li>
        </ul>
      </div>
    )
  }
}

export default BlogList
