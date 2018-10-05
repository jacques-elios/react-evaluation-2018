import React from 'react'
import { number, oneOf, func } from 'prop-types'

const LikeBtn = ({ type, value, onClick }) => (
  <a className="btn btn-default" title={`${type === 'like' ? '+' : '-'}1`} onClick={onClick}>
    {value} <i className={`glyphicon glyphicon-thumbs-${type === 'like' ? 'up' : 'down'}`} />
  </a>
)

LikeBtn.propTypes = {
  value: number,
  type: oneOf(['like', 'dislike']),
  onClick: func,
}

export default LikeBtn
