import React, { Component } from 'react'

class Work extends Component {

  workToggle() {
    if (this.props.work === 'off') {
      this.props.changeWork('on')
      console.log(this.props.work)
    } else {
      this.props.changeWork('off')
      console.log(this.props.work)
    }
  }

  render() {
    return (
      <div className='work' onClick={this.workToggle.bind(this)}>
        <h4 id='work-text'>
          PORTFOLIO
        </h4>
      </div>
    )
  }
}

export default Work
