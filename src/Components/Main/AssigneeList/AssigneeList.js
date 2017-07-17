import React from 'react'
import Assignee from './Assignee/Assignee'
import './_assignee_list.sass'

const AssigneeList = ({ assignees, setAssignee }) => {
  const uniqNames = (acc, el) => (
    acc.map(assignee => assignee.user.id)
      .includes(el.user.id) ? acc : acc.concat(el)
  )

  const assigneeList = assignees.reduce(uniqNames, [])
    .map((assignee, i) => (
      <Assignee
        key={i}
        name={assignee.user.name}
        id={assignee.user.id}
        completed={assignee['completed?']}
        setAssignee={setAssignee}
      />
    ))

  return (
    <div className='AssigneeList'>
      { assigneeList }
    </div>
  )
}

export default AssigneeList
