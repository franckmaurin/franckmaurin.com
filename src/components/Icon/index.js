import React, { PropTypes } from 'react'
import classNames from 'classnames'
import sprite from '../../media/sprite.svg'
import './styles.css'

const Icon = (params) => {
  const className = classNames(
    'Icon',
    `Icon--${params.id}`,
    `Icon--${params.color}`,
    params.className
  )

  return (
    <span className={className}>
      <svg>
        <use xlinkHref={`${sprite}#${params.id}`} />
      </svg>
    </span>
  )
}

Icon.PropTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
}

Icon.defaultProps = {
  id: 'fake',
  color: 'standard'
}

export default Icon
