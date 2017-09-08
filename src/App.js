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
      bio: 'a',
    }
    this.changeContact = this.changeContact.bind(this)
    this.changeWork = this.changeWork.bind(this)
    this.changeBio = this.changeBio.bind(this)
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

  changeBio(toggle) {
    this.setState({
      bio: toggle,
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header />

        <Work
          work={this.state.work}
          changeWork={this.changeWork}
        />

        <Contact
          contact={this.state.contact}
          changeContact={this.changeContact}
        />

        <Bio
          bio={this.state.bio}
          changeBio={this.changeBio}
        />

        <Blog />
      </div>
    );
  }
}

export default App;
