import React, { Component } from 'react'
import Adjective from './Adjective/AdjectiveContainer'
import './_adjective_list.sass'

class AdjectiveList extends Component {
  constructor() {
    super()
    this.state = { adjectives: [] }

    this.eachAdjective = this.eachAdjective.bind(this)
  }

  componentDidMount() {
    if (localStorage.adjectives) { this.setAdjectivesLocally() }
    else { this.retrieveAdjectives() }
  }

  setAdjectivesLocally() {
    var adjectiveList = localStorage.getItem('adjectives').split(',')
    this.setState({ adjectives: adjectiveList })
  }

  retrieveAdjectives() {
    var that = this
    fetch('https://johariwindowapi.herokuapp.com/api/v1/adjectives')
      .then(result => result.json())
      .then(data => {
        that.setState({ adjectives: data })
        localStorage.setItem('adjectives', data)
        return true
      })    
  }

  eachAdjective(name, i) {
    return <Adjective key={i} name={name} />
  }

  render() {
    return (
      <div className='AdjectiveList'>
        { this.state.adjectives.map(this.eachAdjective) }
      </div>
    )
  }
}

export default AdjectiveList
