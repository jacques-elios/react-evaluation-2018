import { connect } from 'react-redux'
import LikeBtn from './LikeBtn'
import { doLike, doDislike } from '../../store/actions/rules'

const mapStateToProps = (state, { id, type }) => {
  const rule = state.rules.find(rule => rule.id === id)
  return {
    value: rule && rule[`${type}s`],
  }
}

const mapDispatchToProps = (dispatch, { type, id }) => {
  const action = type === 'like' ? doLike : doDislike
  return {
    onClick: () => dispatch(action(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LikeBtn)
