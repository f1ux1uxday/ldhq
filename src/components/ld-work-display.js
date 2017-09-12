import React, { Component } from 'react'

import Thumb from '../assets/hypno-timer.png'

class WorkDisplay extends Component {
  render() {
    return (
      <div className='work-display'>
        <div className='first row'>
          <div className='row-item'>
            <img className='thumbnail' src={Thumb}/>
          </div>
          <div className='row-item'>
            <img className='thumbnail' src={Thumb}/>
          </div>
          <div className='row-item'>
            <img className='thumbnail' src={Thumb}/>
          </div>
        </div>
        <div className='second row'>
          <div className='row-item'>
            <a href='http://hypno-timer.herokuapp.com' target='blank'>
              <img className='thumbnail' src={Thumb}/>
            </a>
          </div>
          <div className='row-item'>
            <img className='thumbnail' src={Thumb}/>
          </div>
          <div className='row-item'>
            <img className='thumbnail' src={Thumb}/>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDisplay
