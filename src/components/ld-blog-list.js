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
            uno: the quickening
          </li>
          <li>
            two: alfalfa v. sipowitz
          </li>
          <li>
            three: shakespeare the nurse
          </li>
          <li>
            four: FOSS saved my life... TWICE
          </li>
          <li>
            five: top ten ways to spell howdy
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogList
