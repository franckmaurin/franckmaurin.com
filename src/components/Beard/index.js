import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import noUiSlider from 'nouislider'
import './styles.css'

class Beard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: this.props.step,
      previousStep: null
    }
  }

  componentDidMount() {
    noUiSlider.create(this.slider, {
      start: [this.state.step],
      range: { min: [0], max: [4] },
      step: 1,
      orientation: 'vertical'
    })

    this.slider.noUiSlider.on('update', (values, handle) => {
      this.changeStep(+values[handle])
    })

    setTimeout(() => {
      this.slider.noUiSlider.set(2)
    }, 2000)
  }

  changeStep(step) {
    if (step >= 0 && step < 5 && step !== this.state.step) {
      this.setState({ step: +step, previousStep: this.state.step })
    }
  }

  render() {
    const hasPrevious = this.state.previousStep !== null
    return (
      <div className="Beard">
        <ul className="Beard__items">
          {[0, 1, 2, 3, 4].map((step) => {
            const beardPicture = require(`../../media/beards/${step}.jpg`)
            const isFirst = (this.props.step === step)
            const isCurrent = (this.state.step === step)
            const isPrevious = (this.state.previousStep === step)
            const isDown = (hasPrevious && this.state.step > this.state.previousStep)
            const isUp = (hasPrevious && this.state.step < this.state.previousStep)
            const beardClassName = classNames(
              'Beard__item', {
                'Beard__item--stay': (
                  (!hasPrevious && isFirst) || (isCurrent && isUp) || (isPrevious && isDown)
                ),
                'Beard__item--enter': (hasPrevious && isCurrent && isDown),
                'Beard__item--leave': (hasPrevious && isPrevious && isUp)
              }
            )
            return (
              <li key={`beard-${step}`} className={beardClassName}>
                <img src={beardPicture} alt="" />
              </li>
            )
          })}
        </ul>
        <div className="Beard__slider">
          <div ref={(c) => { this.slider = c }} />
        </div>
      </div>
    )
  }
}

Beard.propTypes = {
  step: PropTypes.number
}

Beard.defaultProps = {
  step: 0
}

export default Beard
