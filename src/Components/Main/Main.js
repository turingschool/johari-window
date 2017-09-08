import React from 'react'
import ReactLoading from 'react-loading'
import './_main.sass'
import Header from './Header/Header'
import AssigneeList from './AssigneeList/AssigneeList'

const Main = props => {
  const { user, assignees, setAssignee } = props

  const loader = (
    <ReactLoading type="bars" color="#444" />
  )

  const assigneeList = (
    <AssigneeList
      assignees={assignees}
      user={user}
      setAssignee={setAssignee}
    />
  )

  const body = assignees[0] === "loading"
    ? loader
    : assigneeList

  return (
    <div className='Main'>
      <Header user={user} />
      { body }
    </div>
  )
}

export default Main

