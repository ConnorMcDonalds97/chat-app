import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
    switch (action.type) {
        case types.ADD_USER: // when we add a new user, update the state of the app with the name and id for the new user
            return state.concat([
                {
                    name: action.name,
                    id: action.id
                }
            ])
        case types.USERS_LIST: // This action requests the list of users, so we just return a new list of users
            return action.users // The state is updated with a new list of users
        default:
            return state
    }
}

export default users