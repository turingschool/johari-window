import React, { Component } from 'react';
import Assignee from './Assignee/Assignee';
import './_assignee_list.sass';

class AssigneeList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  //
  // componentDidMount() {
  //   console.log('why', this.props);
  //   fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.props.user.id}/assignments`)
  //     .then(result => result.json())
  //     .then(data => this.setState({ assignees: data }))
  // }

  eachAssignee(assignee, i) {
    this.props.assignees.map((assignee, i) => {
      return <Assignee key={i} name={assignee.user.name} id={assignee.user.id} completed={assignee['completed?']} />
    })
  }

  render() {
    if(!this.props.assignees.length > 0) return <div></div>
    return (
      <div className='AssigneeList'>
        { this.eachAssignee() }
      </div>
    )
  }
}

export default AssigneeList;
