import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'
import JohariSubmit from '../johari-submit/JohariSubmit'
import Axios from 'axios'
import { Link } from 'react-router-dom';

class Johari extends Component {

  constructor(props) {
    super(props);
    this.state = { evaluateeName: '', adjectives: [],
      user: { user: this.setUser(localStorage.getItem('profile'), localStorage.getItem('token')) }
    }
    props.auth.on('profile_updated', () => {
      this.setUser(localStorage.getItem('profile'), localStorage.getItem('id_token'))
    })

    this.toggleAdjective = this.toggleAdjective.bind(this);
    this.retrieveNameAndSetLocally = this.retrieveNameAndSetLocally.bind(this);
    this.readyToSubmit = this.readyToSubmit.bind(this);
  }

  setUser(profile, token) {
    if(profile) {
      let parsed_profile = JSON.parse(profile)
      let user_info = {"user": {"name": parsed_profile.name, "github": parsed_profile.nickname, "token": token}}
      Axios.post('https://johariwindowapi.herokuapp.com/api/v1/users', user_info)
        .then(result => {
          let user_response = result.data
          this.setState({user: user_response})
        })
        .catch(error => console.log(error))
    } else {
      return false
    }
  }

  componentDidMount() {
    var user = 'user' + this.props.evaluateeID
    if (localStorage[user]) { this.setNameLocally(user) }
    else { this.retrieveNameAndSetLocally(user) }
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

  retrieveNameAndSetLocally(user) {
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.props.evaluateeID}`)
    .then(result => result.json())
    .then(data => {
      this.setState({ evaluateeName: data.name })
      localStorage.setItem(user, data.name)
      return true
    })
  }

  setNameLocally(user) {
    this.setState({ evaluateeName: localStorage[user] })
  }

  render() {
    return (
      <div className='Johari'>
        <h3 className='johari-title'>Evaluate {this.state.evaluateeName}</h3>
        <p className='directions'>Select 15 that apply.</p>
        <AdjectiveList toggleAdjective={this.toggleAdjective}/>
        <div className='johari-buttons'>
          <JohariSubmit adjectives={this.state.adjectives}
          ready={this.readyToSubmit} evaluateeID={this.props.evaluateeID}/>
          <Link to='/' className='johari-cancel' >Cancel</Link>
        </div>
      </div>
    );
  }
}

export default Johari;
