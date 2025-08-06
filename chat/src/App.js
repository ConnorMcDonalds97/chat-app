import React from 'react'
import './App.css'
import { Sidebar } from './containers/Sidebar'
import { MessagesList } from './containers/MessagesList'
import { AddMessage } from './containers/AddMessage'
import username from './utils/name'



const App = () => (
  <div id="container">
    <Sidebar />
    <section id="main">
      <MessagesList username = { username} />
      <AddMessage />
    </section>
  </div>
)

export default App