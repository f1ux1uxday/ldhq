import React, { Component } from 'react'

class Bio extends Component {
    bioToggle() {
        if (this.props.bio === 'a') {
            this.props.changeBio('b')
        }
        if (this.props.bio === 'b') {
            this.props.changeBio('c')
        }
        if (this.props.bio === 'c') {
            this.props.changeBio('a')
        }
    }

    stateCheckBio() {
        let bioText;

        switch (this.props.bio) {
            case 'b':
                bioText = 'Linux guy and musician. A provider of comic relief who knows timing is everything.';
                break;
            case 'c':
                bioText = 'Socratic enquirer and student of many disciplines. A pragmatic realist and generally solid person.';
                break;
            default:
                bioText = 'Full stack developer pursuing interesting aesthetics, creative solutions and endless self-improvement';        
        }

        return (
            <div className='bio' onClick={this.bioToggle.bind(this)}>
                <h4 id='bio-text'>
                    {bioText}
                </h4>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.stateCheckBio()}
            </div>
        )
    }
}

export default Bio
