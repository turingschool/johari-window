import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_johari_submit.sass';

class JohariSubmit extends Component {
  constructor(props) {
    super(props)

    this.activeSubmit = this.activeSubmit.bind(this)
    this.inactiveSubmit = this.inactiveSubmit.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit() {
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.props.evaluateeID}/descriptions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        johari: this.props.adjectives,
        describer_id: this.props.user.id,
      })
    })
    .then(data => true)
  }

  activeSubmit() {
    return (
      <div className={'JohariSubmit active-submit'}>
        <Link onClick={this.submit} to='/'>Submit</Link>
      </div>
    )
  }

  inactiveSubmit() {
    return (
      <div className={'JohariSubmit inactive-submit'}>
        <a>Submit</a>
      </div>
    )
  }

  render() {
    if (this.props.ready()) { return this.activeSubmit() }
    else { return this.inactiveSubmit() }
  }
}

export default JohariSubmit;
