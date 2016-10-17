import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import HomePage from './components/HomePage'
import WorkPage from './components/WorkPage'

const routes = (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/work/:workId/" component={WorkPage} />
  </Route>
)

export default routes
