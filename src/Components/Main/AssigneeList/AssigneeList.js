import React, { Component } from 'react';
import Assignee from './Assignee/Assignee';
import './_assignee_list.sass';

class AssigneeList extends Component {
  constructor(props) {
    super(props);
    this.state = { assignees: [] }
  }
  
  componentDidMount() {
    console.log('why', this.props);
    this.props.user.id && fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.props.user.id}/assignments`)
      .then(result => result.json())
      .then(data => {
        this.setState({ assignees: data })
      })
  }

  eachAssignee(assignee, i) {
    return this.state.assignees.map((assignee, i) => {
      return <Assignee key={i} name={assignee.user.name} id={assignee.user.id} completed={assignee['completed?']} />
    })
  }

  render() {
    return (
      <div className='AssigneeList'>
        { this.eachAssignee() }
      </div>
    )
  }
}

export default AssigneeList;
