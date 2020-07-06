import React, { Component } from 'react';

import ThumbSim from '../assets/simon-joe.png';
import ThumbGil from '../assets/ganesh.png';
import ThumbHyp from '../assets/hypno-timer.png';
import ThumbTic from '../assets/ttt.png';
import ThumbWea from '../assets/weather.png';
import ThumbWik from '../assets/wikisearch.png';

class WorkDisplay extends Component {
    showDescription(num) {
        this.props.getDescription(num);
    }

    descriptionSwitch() {
        let text;

        switch (this.props.descript) {
            case '1':
                text = 'a pattern-based memory test proctored by the mercurial Simon Joe';
                break;
            case '2':
                text = 'an extra spooky and highly-configurable 4x4 tic-tac-toe deathmatch';
                break;
            case '3':
                text = 'a hypnotic timing device for pomodoro training or cooking pot roasts';
                break;
            case '4':
                text = 'a fast and easy wikipedia searcher using AJAX to call data from the API';
                break;
            case '5':
                text = 'a stylish way to check the weather using data from the OpenWeatherMap API';
                break;
            case '6':
                text = 'a luminous website made for a local pop group, made with react';
                break;
            default:
                text = 'a selection of works';
        }

        return (
            <p className='proj-desc'>{text}</p>
        );
    }

    render() {
        return (
            <div className='work-display'>
                {this.descriptionSwitch()}
                <div className='thumbnail-box'>
                    <div className='first row'>
                        <div
                            className='row-item'
                            onMouseOver={this.showDescription.bind(this, '1')}
                            onMouseOut={this.showDescription.bind(this, '0')}
                        >
                            <a href='https://simon-joe.herokuapp.com' target='blank'>
                                <img className='thumbnail' src={ThumbSim} alt='' />
                            </a>
                        </div>

                        <div
                            className='row-item'
                            onMouseOver={this.showDescription.bind(this, '2')}
                            onMouseOut={this.showDescription.bind(this, '0')}
                        >
                            <a href='http://tictactorment.herokuapp.com' target='blank'>
                                <img className='thumbnail' src={ThumbTic} alt='' />
                            </a>
                        </div>

                        <div
                            className='row-item'
                            onMouseOver={this.showDescription.bind(this, '3')}
                            onMouseOut={this.showDescription.bind(this, '0')}
                        >
                            <a href='http://hypno-timer.herokuapp.com' target='blank'>
                                <img className='thumbnail' src={ThumbHyp} alt='' />
                            </a>
                        </div>
                    </div>

                    <div className='second row'>
                        <div
                            className='row-item'
                            onMouseOver={this.showDescription.bind(this, '4')}
                            onMouseOut={this.showDescription.bind(this, '0')}
                        >
                            <a href='https://gilganesh.com/ACE/wikisearch.html' target='blank'>
                                <img className='thumbnail' src={ThumbWik} alt='' />
                            </a>
                        </div>

                        <div
                            className='row-item'
                            onMouseOver={this.showDescription.bind(this, '5')}
                            onMouseOut={this.showDescription.bind(this, '0')}
                        >
                            <a href='https://gilganesh.com/ACE/weather.html' target='blank'>
                                <img className='thumbnail' src={ThumbWea} alt='' />
                            </a>
                        </div>

                        <div
                            className='row-item'
                            onMouseOver={this.showDescription.bind(this, '6')}
                            onMouseOut={this.showDescription.bind(this, '0')}
                        >
                            <a href='https://gilganesh.com' target='blank'>
                                <img className='thumbnail' src={ThumbGil} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkDisplay;
