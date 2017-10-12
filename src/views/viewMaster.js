import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeView from './homeView';
import ProjectView from './projectView'
import BlogView from './blogView'

const ViewMaster = () => (
  <div id='layout'>
    <Switch>
      <Route path='/' exact component={HomeView} />
      <Route path='/projects' exact component={ProjectView} />
      <Route path='/blog' exact component={BlogView} />
    </Switch>
  </div>
)

export default ViewMaster
