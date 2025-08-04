const initialState = { // intial state of the app. Empty messages array and empty users array
    messages: [],
    users: []
};

// Reducer function, this function gets called everytime an action is dispatched.
// Takes in the current state of the app and the action to do as input
export default function chatReducer(state = initialState, action) {
    switch (action.type){
        case 'ADD_MESSAGE':
            return {
                ...state, // everything in the current state
                messages: [...state.messages, action.payload], // take the current messages array and append the new one on the end.
            };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload], // Same thing for the users
            };
        default:
            return state; // return the unchanged current state if the action has no matching cases
    }
}
