import React, { Component } from 'react'

import WorkDisplay from './ld-work-display'

class Work extends Component {

    render() {
        return (
            <div>
                <div className='work-view'>
                    <h4 id='work-view-text'>
                        PROJECTS
                    </h4>
                    <WorkDisplay
                        descript={this.props.descript}
                        getDescription={this.props.getDescription}
                    />
                </div>
            </div>
        )
    }
}

export default Work
