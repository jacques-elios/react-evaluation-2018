import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LikeBtn from './LikeBtn'

class Rule extends React.Component {
  static propTypes = {
    rule: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.description,
      likes: PropTypes.number,
      dislikes: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    description: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = { folded: !props.rule.description }
  }

  onTitleClick = () => {
    this.setState({
      folded: !this.state.folded || this.props.description,
    })
  }

  render() {
    const { rule } = this.props
    const { folded } = this.state

    return (
      <div className="panel panel-primary">
        <div className="panel-heading" role="presentation" onClick={this.onTitleClick}>
          {rule.title}
          <i className={`pull-right glyphicon glyphicon-chevron-${folded ? 'down' : 'up'}`} />
        </div>
        <div className={`panel-body  ${folded ? 'hidden' : ''}`}>
          <p>{rule.description}</p>
        </div>
        <div className="panel-footer">
          <div className="btn-toolbar">
            {rule.tags.map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
            <div className="btn-group btn-group-xs pull-right">
              <Link to={`/edit/${rule.id}`} className="btn btn-primary" title="Update">
                <i className="glyphicon glyphicon-pencil" />
              </Link>
            </div>
            <div className="btn-group btn-group-xs pull-right">
              <LikeBtn type="like" id={rule.id} />
              <LikeBtn type="dislike" id={rule.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Rule
