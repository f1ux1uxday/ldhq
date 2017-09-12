import React, { Component } from 'react'

import ThumbHyp from '../assets/hypno-timer.png'
import ThumbWea from '../assets/weather.png'

class WorkDisplay extends Component {
  render() {
    return (
      <div className='work-display'>
        <div className='first row'>
          <div className='row-item'>
            <img className='thumbnail' src={ThumbHyp} alt=''/>
          </div>
          <div className='row-item'>
            <img className='thumbnail' src={ThumbHyp} alt=''/>
          </div>
          <div className='row-item'>
            <img className='thumbnail' src={ThumbHyp} alt=''/>
          </div>
        </div>
        <div className='second row'>
          <div className='row-item'>
            <a href='http://hypno-timer.herokuapp.com' target='blank'>
              <img className='thumbnail' src={ThumbHyp} alt=''/>
            </a>
          </div>
          <div className='row-item'>
            <a href='http://gilganesh.com/ACE/weather.html' target='blank'>
              <img className='thumbnail' src={ThumbWea} alt=''/>
            </a>
          </div>
          <div className='row-item'>
            <img className='thumbnail' src={ThumbHyp} alt=''/>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDisplay
