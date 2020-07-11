import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../components/ld-header'
import Bio from '../components/ld-bio'
import Work from '../components/ld-work'
import WorkLink from '../components/ld-work-link'
import Blog from '../components/ld-blog'
import BlogLink from '../components/ld-blog-link'
import Contact from '../components/ld-contact'

import '../App.scss'

class UnifiedView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bio: 'a',
            contact: 'off',
            descript: '0'
        }

        this.getDescription = this.getDescription.bind(this)
        this.getInitialState = this.getInitialState.bind(this)
        this.changeBio = this.changeBio.bind(this)
        this.changeContact = this.changeContact.bind(this)
    }

    getInitialState() {
        this.setState({
            bio: 'a',
            contact: 'off',
            descript: '0'
        })
    }

    getDescription(projectNum) {
        this.setState({
            descript: projectNum,
        })
    }

    changeBio(toggle) {
        this.setState({
            bio: toggle,
        })
    }

    changeContact(toggle) {
        this.setState({
            contact: toggle,
        })
    }

    render() {
        return (
            <div id='layout'>
                <div className='App container'>
                    <Header
                        getInitialState={this.getInitialState}
                    />
                    <Switch>
                        <Route exact path='/'>
                            <Bio
                                bio={this.state.bio}
                                changeBio={this.changeBio}
                            />
                            <WorkLink />
                            <BlogLink />
                            <Contact
                                changeContact={this.changeContact}
                                contact={this.state.contact}
                                getInitialState={this.getInitialState}
                            />
                        </Route>
                        <Route path='/projects'>
                            <Work
                                descript={this.state.descript}
                                getDescription={this.getDescription}
                            />
                        </Route>
                        <Route path='/blog'>
                            <Blog />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default UnifiedView
