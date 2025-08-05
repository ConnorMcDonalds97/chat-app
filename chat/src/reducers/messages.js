import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {    // pass in the current state and the action
    switch (action.type) {
        case types.ADD_MESSAGE: // in any of these two cases, we're gonna update the state of the app with the new message and it's author
        case types.MESSAGE_RECIEVED:
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