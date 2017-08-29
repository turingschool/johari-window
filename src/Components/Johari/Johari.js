import React, { Component } from 'react'
import './_johari.sass'
import AdjectiveList from './AdjectiveList/AdjectiveList'
import JohariSubmit from './JohariSubmit/JohariSubmit'
import { Link } from 'react-router-dom'

class Johari extends Component {

  constructor(props) {
    super(props)
    this.state = { evaluateeName: '', adjectives: [] }

    this.toggleAdjective = this.toggleAdjective.bind(this)
    this.readyToSubmit = this.readyToSubmit.bind(this)
  }

  toggleAdjective(adjective) {
    let adjectives = this.state.adjectives
    if (adjectives.includes(adjective)) {
      adjectives = adjectives.filter(name => name !== adjective)
    } else {
      adjectives.push(adjective)
    }
    this.setState({ adjectives: adjectives })
  }

  readyToSubmit() {
    return (this.state.adjectives.length === 15)
  }

  render() {
    const { assignee, user, evaluateeID } = this.props
    const { adjectives } = this.state

    return (
      <div className='Johari'>
        <h3 className='johari-title'>
          Evaluate { assignee.name }
        </h3>
        <p className='directions'>Select 15 that apply.</p>
        <h3 className='selected-counter'>{ `${adjectives.length} / 15` }</h3>
        <AdjectiveList toggleAdjective={ this.toggleAdjective }/>
        <div className='johari-buttons'>
          <JohariSubmit adjectives={ adjectives } user={ user }
          ready={ this.readyToSubmit } evaluateeID={ evaluateeID }/>
          <Link to='/' className='johari-cancel' >Cancel</Link>
        </div>
      </div>
    )
  }
}

export default Johari
