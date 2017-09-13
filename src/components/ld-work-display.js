import React, { Component } from 'react'

import ThumbCal from '../assets/calcul8.png'
import ThumbGil from '../assets/ganesh.png'
import ThumbHyp from '../assets/hypno-timer.png'
import ThumbTwi from '../assets/twitch.png'
import ThumbWea from '../assets/weather.png'
import ThumbWik from '../assets/wikisearch.png'

class WorkDisplay extends Component {
  render() {
    return (
      <div className='work-display'>
        <div className='first row'>
          <div className='row-item'>
            <a href='http://gilganesh.com' target='blank'>
              <img className='thumbnail' src={ThumbGil} alt=''/>
            </a>
          </div>
          <div className='row-item'>
            <a href='http://hypno-timer.herokuapp.com' target='blank'>
              <img className='thumbnail' src={ThumbHyp} alt=''/>
            </a>
          </div>
          <div className='row-item'>
            <a href='http://gilganesh.com/ACE/calc.html' target='blank'>
              <img className='thumbnail' src={ThumbCal} alt=''/>
            </a>
          </div>
        </div>
        <div className='second row'>
          <div className='row-item'>
            <a href='http://zenradsyndicate.com/wikisearch.html' target='blank'>
              <img className='thumbnail' src={ThumbWik} alt=''/>
            </a>
          </div>
          <div className='row-item'>
            <a href='http://gilganesh.com/ACE/weather.html' target='blank'>
              <img className='thumbnail' src={ThumbWea} alt=''/>
            </a>
          </div>
          <div className='row-item'>
            <a href='http://gilganesh.com/ACE/twitch.html' target='blank'>
              <img className='thumbnail' src={ThumbTwi} alt=''/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDisplay
