import React, { Component } from 'react'

import gitHubLogo from '../assets/GitHub_Logo.png'
import linkedInLogo from '../assets/icons8-LinkedIn-48.png'
import replitLogo from '../assets/repl-logo-small.png'

class Contact extends Component {
  contactToggle() {
    if (this.props.contact === 'off') {
      this.props.changeContact('on')
    }
    if (this.props.contact === 'on') {
      this.props.changeContact('off')
    }
  }

  stateCheckContact() {
    if (this.props.contact === 'off') {
      return (
        <h4 id='contact-off'>
          CONTACT
        </h4>
      )
    }
    if (this.props.contact === 'on') {
      return (
        <div className='contact-items'>
          <h4 id='contact-mail'>
            LUCASADAYTON[at]GMAIL.COM
          </h4>
          <div id='logos'>
            <img src={gitHubLogo} className='icon' id='gh-icon' alt='n'></img>
            <img src={linkedInLogo} className='icon' id='li-icon' alt='n'></img>
            <img src={replitLogo} className='icon' id='li-icon' alt='n'></img>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='contact' onClick={this.contactToggle.bind(this)}>
        {this.stateCheckContact()}
      </div>
    )
  }
}

export default Contact
