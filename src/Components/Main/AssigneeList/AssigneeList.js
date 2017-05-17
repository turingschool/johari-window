import React, { Component } from 'react';
import Assignee from './Assignee/Assignee';
import './_assignee_list.sass';

class AssigneeList extends Component {

  eachAssignee(assignee, i) {
    return this.props.assignees.map((assignee, i) => {
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
