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
            blog title numero uno: the quickening
          </li>
          <li>
            blog title number two: alfalfa v. sipowitz
          </li>
          <li>
            blog title three and a half: shakespeare's nurse
          </li>
          <li>
            blog title numero four: FOSS saved my life... TWICE
          </li>
          <li>
            blog title number five: top ten ways to spell howdy
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogList
