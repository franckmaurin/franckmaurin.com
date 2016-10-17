import React, { Component } from 'react'
import classNames from 'classnames'
import Detail from '../Detail'
import Beard from '../Beard'
import './styles.css'

class Intro extends Component {
  constructor(props) {
    super(props)
    this.handleMoreDetail = this.handleMoreDetail.bind(this)
    this.handleLessDetail = this.handleLessDetail.bind(this)
    this.state = {
      detail: null
    }
  }

  handleMoreDetail(content) {
    this.setState({ detail: content })
  }

  handleLessDetail() {
    this.setState({ detail: null })
  }

  render() {
    const className = classNames(
      'Intro', {
        'Intro--detail': this.state.detail
      }
    )

    return (
      <section className={className}>
        <div>
          <Beard />

          <h1 className="Intro__title">
            Hi, I am{' '}
            <Detail
              name="Franck Maurin"
              content="a 31 years old French front-end engineer"
              handleMoreDetail={this.handleMoreDetail}
              handleLessDetail={this.handleLessDetail}
            />{' '}
            and
            <br />
            I put{' '}
            <Detail
              name="magic words"
              content="using React, Redux and Node"
              handleMoreDetail={this.handleMoreDetail}
              handleLessDetail={this.handleLessDetail}
            />{' '}
            between{' '}
            <code className="Intro__code">{'<>'}</code> and{' '}
            <code className="Intro__code">{'{}'}</code>
            <br />
            to make{' '}
            <Detail
              name="things"
              content="click or scroll to discover selected works"
              handleMoreDetail={this.handleMoreDetail}
              handleLessDetail={this.handleLessDetail}
            />{' '}
            happens.
          </h1>

          <h2 className="Intro__subtitle">
            {this.state.detail || 'Hover over words to get more info'}
          </h2>
        </div>
      </section>
    )
  }
}

export default Intro
