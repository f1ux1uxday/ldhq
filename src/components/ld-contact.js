import React, { Component } from 'react'

class Contact extends Component {
  contactToggle() {
    if (this.props.contact === 'off') {
      this.props.changeContact('on')
      console.log(this.props.contact)
    } else {
      this.props.changeContact('off')
      console.log(this.props.contact)
    }
  }

  render() {
    return (
      <div className='contact' onClick={this.contactToggle.bind(this)}>
        <h4 id='contact-text'>
          CONTACT
        </h4>
      </div>
    )
  }
}

export default Contact
