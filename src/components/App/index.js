import React from 'react'
import { getContent } from '../../helpers'
import './styles.css'

const App = (params) => {
  const data = getContent(params.location.pathname)
  return (
    <div>
      {React.cloneElement(params.children, { data })}
    </div>
  )
}

export default App
