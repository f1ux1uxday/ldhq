import React, { Component } from 'react';

import Blog from './components/ld-blog'
import Work from './components/ld-work'
import Contact from './components/ld-contact'
import Bio from './components/ld-bio'
import Header from './components/ld-header'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      work: 'off',
      contact: 'off',
      blog: 'off',
      bio: 'a',
    }
    this.changeContact = this.changeContact.bind(this)
    this.changeWork = this.changeWork.bind(this)
    this.changeToBlogIndex = this.changeToBlogIndex.bind(this)
    this.changeBio = this.changeBio.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.selectBlog = this.selectBlog.bind(this)
  }

  changeWork(toggle) {
    this.setState({
      work: toggle,
    })
  }

  changeContact(toggle) {
    this.setState({
      contact: toggle,
    })
  }

  changeToBlogIndex() {
    this.setState({
      blog: 'index',
    })
  }

  changeBio(toggle) {
    this.setState({
      bio: toggle,
    })
  }

  getInitialState() {
    this.setState({
      work: 'off',
      contact: 'off',
      blog: 'off',
      bio: 'a',
    })
  }

  selectBlog(blog) {
    this.setState({
      blog: blog,
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header
          getInitialState={this.getInitialState}
        />

        <Work
          blog={this.state.blog}
          work={this.state.work}
          changeWork={this.changeWork}
        />

        <Contact
          blog={this.state.blog}
          contact={this.state.contact}
          changeContact={this.changeContact}
        />

        <Bio
          bio={this.state.bio}
          blog={this.state.blog}
          changeBio={this.changeBio}
        />

        <Blog
          blog={this.state.blog}
          changeToBlogIndex={this.changeToBlogIndex}
          selectBlog={this.selectBlog}/>
      </div>
    );
  }
}

export default App;
