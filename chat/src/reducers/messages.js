import * as types from '../constants/actionTypes'

const messages = (state = [], action) => {    // pass in the current state and the action
    console.log('messages reducer state:', state, 'action:', action); // <-- Add this line

    switch (action.type) {
        case types.MESSAGE_RECEIVED:
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