import React, { Component } from 'react'

class Contact extends Component {
  contactToggle() {
    if (this.props.contact === 'off') {
      this.props.changeContact('on')
    }
    if (this.props.contact == 'on') {
      this.props.changeContact('off')
    }
  }

  stateCheckContact() {
    if (this.props.contact === 'off') {
      return (
        <h4 id='contact-text'>
          CONTACT
        </h4>
      )
    }
    if (this.props.contact === 'on') {
      return (
        <h4 id='contact-text'>
          LUCASADAYTON@GMAIL.COM
        </h4>
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
