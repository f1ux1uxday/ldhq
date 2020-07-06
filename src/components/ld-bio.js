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
        console.log(this.props.bio)
    }

    stateCheckBio() {
        let bioText;

        if (this.props.blog !== 'off' || this.props.work !== 'off') {
            return null
        }
        switch (this.props.bio) {
            case 'b':
                bioText = 'Linux enthusiast and musician. A motivated individual. A provider of comic relief who knows timing is everything.';
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

        // if (this.props.bio === 'a') {
            // return (
                // <div className='bio' onClick={this.bioToggle.bind(this)}>
                    // <h4 id='bio-text'>
                        // JavaScript developer specializing in interesting
                        // aesthetics and creative solutions; devoted to the endless
                        // journey of self-improvement.
                    // </h4>
                // </div>
            // )
        // }
        // if (this.props.bio === 'b') {
            // return (
                // <div className='bio' onClick={this.bioToggle.bind(this)}>
                    // <h4 id='bio-text'>
                        // Linux enthusiast, musician and sound designer.
                        // a motivated individual and teammate; a provider of
                        // comic relief who knows timing is everything.
                    // </h4>
                // </div>
            // )
        // }
        // if (this.props.bio === 'c') {
            // return (
                // <div className='bio' onClick={this.bioToggle.bind(this)}>
                    // <h4 id='bio-text'>
                        // Socratic enquirer and student of many disciplines;
                        // pragmatic realist and a generally solid person.
                    // </h4>
                // </div>
            // )
        // }
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
