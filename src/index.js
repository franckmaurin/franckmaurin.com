import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

// client render
if (typeof document !== 'undefined') {
  ReactDOM.render(
    <Router
      history={browserHistory}
      routes={routes}
    />,
    document.getElementById('root')
  )
}
