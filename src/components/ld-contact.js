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
        <h4 id='contact-off'  onClick={this.contactToggle.bind(this)}>
          CONTACT
        </h4>
      )
    }
    if (this.props.contact === 'on') {
      return (
        <div className='contact-items'>
          <h4 id='contact-mail'>
            self[at]lucasdayton.com
          </h4>
          <div id='logos'>
            <a href='https://github.com/f1ux1uxday' target='blank'>
              <img src={gitHubLogo} className='icon' id='gh-icon' alt='n'>
              </img>
            </a>
            <a href='https://www.linkedin.com/in/lucas-dayton-911109a2/' target='blank'>
              <img src={linkedInLogo} className='icon' id='li-icon' alt='n'>
              </img>
            </a>
            <a href='https://repl.it/@fluxpatron' target='blank'>
              <img src={replitLogo} className='icon' id='li-icon' alt='n'>
              </img>
            </a>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='contact'>
        {this.stateCheckContact()}
      </div>
    )
  }
}

export default Contact
