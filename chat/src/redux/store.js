import { createStore } from 'redux';
import chatReducer from './reducers';

// the store holds the app's state

// creates the Redux store
const store = createStore(
    chatReducer, // pass the main reducer for the app to the function
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enables debugging tools
);

export default store;