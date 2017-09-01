import React, { Component } from 'react'
import './_johari.sass'
import AdjectiveList from './AdjectiveList/AdjectiveList'
import JohariSubmit from './JohariSubmit/JohariSubmitContainer'
import { Link } from 'react-router-dom'

class Johari extends Component {

	constructor(props) {
		super(props)
		this.state = { evaluateeName: '' }
	}

	render() {
		const { assignee, user, evaluateeID } = this.props
		const { adjectives } = this.props
		const counterColor = adjectives.length === 15 ? 'readyForSubmit' : 'notReady'

		return (
			<div className='Johari'>
				<h3 className='johari-title'>
					Evaluate { assignee.name }
				</h3>
				<p className='directions'>Select 15 that apply.</p>
				<h3 className={`selected-counter ${counterColor}`}>{ `${adjectives.length} / 15` }</h3>
				<AdjectiveList />
				<div className='johari-buttons'>
					<JohariSubmit
						user={ user }
						evaluateeID={ evaluateeID }
					/>
					<Link to='/' className='johari-cancel' >Cancel</Link>
				</div>
			</div>
		)
	}
}

export default Johari
