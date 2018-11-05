import React from 'react'
import PropTypes from 'prop-types'
import Rule from '../Rule'
import { throws } from 'assert';

class RuleList extends React.Component {
  constructor(){
    super();
    this.state ={
      search: ''
    };
  }
  
  updateSearch(event){
    this.setState({search: event.target.value})
  }

  static propTypes = {
    rules: PropTypes.array,
    loadRules: PropTypes.func,
  }

  

  static defaultProps = {
    rules: [],
  }
  

  componentDidMount = () => {
    this.props.loadRules()
  }

  render() { 
    const { rules } = this.props
    let filteredRules = this.props.rules.filter(
    (rule) => {
      return rule.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      
    }
    );
    return (
      <div>
      <input type="text"
      value ={this.state.search}
      onChange={this.updateSearch.bind(this)}>
      </input>

        <br/><br/><br/>
      {filteredRules.map((rule) => {
      return <Rule key={rule.id} rule={rule} />})}
      </div>
    )
  }
}

export default RuleList
