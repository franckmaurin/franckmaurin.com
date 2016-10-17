import React from 'react'
import Helmet from 'react-helmet'
import './styles.css'

const WorkPage = (params) => {
  const { title, description } = params.data
  return (
    <main className="page page--work">
      <Helmet
        title={`${title} - Selected works - Franck Maurin`}
        meta={[
          { name: 'description', content: description }
        ]}
      />
    </main>
  )
}

export default WorkPage
