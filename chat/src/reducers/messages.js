import * as types from '../constants/actionTypes'

const messages = (state = [], action) => {    // pass in the current state and the action

    switch (action.type) {
        case types.MESSAGE_RECEIVED: //  adds a new message to the array when a message is received
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ])
        default: // otherwise, we just return the current state of the app
            return state
    }
}

export default messages