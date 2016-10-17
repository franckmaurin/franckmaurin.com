import React from 'react'
import Helmet from 'react-helmet'
import Intro from '../Intro'
import Portfolio from '../Portfolio'
import About from '../About'
import './styles.css'

const HomePage = (params) => {
  const { seo, portfolio } = params.data
  return (
    <main className="page page--home">
      <Helmet
        title={seo.title}
        meta={[
          { name: 'description', content: seo.description }
        ]}
      />
      <Intro />
      <Portfolio list={portfolio} />
      <About />
    </main>
  )
}

export default HomePage
