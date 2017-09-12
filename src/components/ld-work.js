import React, { Component } from 'react'

import WorkDisplay from './ld-work-display'

class Work extends Component {

  workToggle() {
    if (this.props.work === 'off') {
      this.props.changeWork('on')
      console.log(this.props.work)
    }
  }

  stateCheckWork() {
    if (this.props.blog !== 'off') {
      return null
    }
    if (this.props.work === 'off') {
      return (
        <div className='work' onClick={this.workToggle.bind(this)}>
          <h4 id='work-text'>
            PROJECTS
          </h4>
        </div>
      )
    }
    if (this.props.work === 'on') {
      return (
        <div className='work-view' onClick={this.workToggle.bind(this)}>
          <h4 id='work-view-text'>
            PROJECTS
          </h4>
          <WorkDisplay />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.stateCheckWork()}
      </div>
    )
  }
}

export default Work
