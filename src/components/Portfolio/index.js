import React from 'react'
import { Link } from 'react-router'
import './styles.css'

const Portfolio = (params) => {
  const { list } = params
  return (
    <section className="Portfolio">
      <ul className="Portfolio__list">
        {list.map((portfolio, i) => {
          const cover = require(`../../media/works/${portfolio}/cover.jpg`)
          return (
            <li
              key={`portfolio-${i}`}
              className="Portfolio__item"
            >
              <Link
                to={`/work/${portfolio}/`}
                className="Portfolio__link"
                style={{
                  backgroundImage: `url(${cover})`
                }}
              >
                <div className="Portfolio__header">
                  porfolio
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Portfolio
