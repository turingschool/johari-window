import React, { Component } from 'react'
import './_adjective.sass'

class Adjective extends Component {
  constructor() {
    super()

    this.toggleAdjective = this.toggleAdjective.bind(this)
  }

  toggleAdjective() {
    this.props.actions.toggleAdjective(this.props.name)
  }

  render() {
    return (
      <div className='Adjective'>
        <input type="checkbox" className='checkbox' id={ this.props.name } onClick={this.toggleAdjective} />
        <label htmlFor={ this.props.name }>{ this.props.name }</label>
      </div>
    )
  }
}

export default Adjective
