import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ users }) => (
  // aside for secondary content
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => ( // iterate over the user array prop
        <li key={user.id}> {user.name} </li>
      ))}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({ // users must be an array
      id: PropTypes.number.isRequired, // the id must be a number
      name: PropTypes.string.isRequired // the name must be a string
    }).isRequired)
    .isRequired
}

export default Sidebar