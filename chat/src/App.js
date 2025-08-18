import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { Sidebar } from './containers/Sidebar'
import { MessagesList } from './containers/MessagesList'
import { AddMessage } from './containers/AddMessage'
import setupSocket from './sockets'
import { useDispatch } from 'react-redux'
import handleNewMessage from './sagas'

const App = ({sagaMiddleWare}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [input, setInput] = useState('')
  const socketRef = useRef(null);
  const sagaTaskRef = useRef(null);

  useEffect(() => {
    if (username) {
      socketRef.current = setupSocket(dispatch, username);
      if (!sagaTaskRef.current) {
        sagaTaskRef.current = sagaMiddleWare.run(handleNewMessage,{
          socket: socketRef.current,
          username
        })
      }
    }
  }, [username, dispatch, sagaMiddleWare]);

  if (!username) {
    return (
      <div className="username-modal">
        <h2>Enter your username</h2>
        <input 
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && input.trim()) {
              setUsername(input.trim());
            }
          }}
        placeholder='your name'
        />
        <button 
          onClick={() => {
            if (input.trim()) setUsername(input.trim())
          }}
        >
          Join Chat
        </button>
      </div>
    )
  }

  return (
  <div id="container">
    <Sidebar />
    <section id="main">
      <MessagesList username = { username } />
      <AddMessage username= { username }/>
    </section>
  </div>
)
}

export default App