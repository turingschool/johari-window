import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './_johari_submit.sass'

class JohariSubmit extends Component {
	constructor(props) {
		super(props)

		this.activeSubmit = this.activeSubmit.bind(this)
		this.inactiveSubmit = this.inactiveSubmit.bind(this)
		this.submit = this.submit.bind(this)
	}

	submit() {
		const { evaluateeID, adjectives, user } = this.props

		fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${evaluateeID}/descriptions`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				johari: adjectives,
				describer_id: user.id,
			})
		})
			.then(data => {
				const { evaluateeID: id, actions } = this.props
				actions.completeAssignee(id)
				return true
			})
	}

	activeSubmit() {
		return (
			<Link onClick={this.submit} to='/' className={'JohariSubmit active-submit'}>Submit</Link>
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
		const button = this.props.adjectives.length === 15
			? this.activeSubmit()
			: this.inactiveSubmit()
		return button
	}
}

export default JohariSubmit
