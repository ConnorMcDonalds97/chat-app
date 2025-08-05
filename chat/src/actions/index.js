import * as types from '../constants/actionTypes'

// These will be the actions for our app

let nextMessageID = 0
const nextUserID = 0

export const addMessage = (message, author) => ({ // messages from you, the user
    type: types.ADD_MESSAGE,
    id: nextMessageID++, // each message id will have a new id
    message, 
    author
}) // addMessage is a tuple containing the message and its author

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserID++,
    name
})

export const messageReceived = (message,author) => ({ // messages from the other users in the chat
    type: types.MESSAGE_RECIEVED,
    id: nextMessageID++,
    message,
    author
})

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})



