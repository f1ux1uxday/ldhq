import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <div className='header' onClick={this.props.getInitialState}>
          <h1 id='name' >LUCAS DAYTON</h1>
        </div>
    )
  }
}

export default Header
