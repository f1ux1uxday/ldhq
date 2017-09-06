import React, { Component } from 'react'

class Bio extends Component {
  bioToggle() {
    if (this.props.bio === 'a') {
      this.props.changeBio('b')
    }
    if (this.props.bio === 'b') {
      this.props.changeBio('a')
    }
    console.log(this.props.bio)
  }

  stateCheckBio() {
    if (this.props.bio === 'a') {
      return (
        <h4 id='bio-text'>
          front-end web developer specializing in Javascript,
          interesting aesthetics and creative solutions;
          devoted to programming outside the box and passionate about
          getting work done.
        </h4>
      )
    }
    if (this.props.bio === 'b') {
      return (
        <h4 id='bio-text'>
          also a Linux enthusiast, multi-instrumentalist and sound designer.
          a self-motivated individual and helpful teammate. a provider of
          comic relief who knows timing is everything.
        </h4>
      )
    }
  }

  render() {
    return (
      <div className='bio' onClick={this.bioToggle.bind(this)}>
        {this.stateCheckBio()}
      </div>
    )
  }
}

export default Bio
