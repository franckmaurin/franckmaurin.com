import React, { PropTypes } from 'react'
import './styles.css'

const Detail = params => (
  <span
    className="Detail"
    onMouseEnter={() => { params.handleMoreDetail(params.content) }}
    onMouseLeave={params.handleLessDetail}
  >
    {params.name}
  </span>
)

Detail.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  handleMoreDetail: PropTypes.func,
  handleLessDetail: PropTypes.func
}

export default Detail
