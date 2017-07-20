import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './_sidebar.sass'

const Sidebar = ({ user, auth }) => {
  const loggedInAs = user.name
    ? `logged in as: ${user.name}`
    : "please log in"

  const admin = user.role === "staff" && (<Link to='/admin'>Admin</Link>)

  const logout = (
    <button onClick={auth.logout}>Logout</button>
  )

  return (
    <div className='Sidebar'>
      <div className='sidebar-header'>
        <h1>Johari Window</h1>
      </div>
      <div className='sidebar-links'>
        <Link to='/'>Assignments</Link>
        <Link to='/mywindow'>My Window</Link>
        { admin || null }
      </div>
      <div className='sidebar-user-info'>
        <p>{ loggedInAs }</p>
        { auth.loggedIn() && logout }
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  user: PropTypes.object
}

export default Sidebar
