import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
//import thunk from 'redux-thunk';
import allreducers from './reducers/index'
//import rootReducer from './reducers';
// const initialState = {
//     counter: 0
// }
// const rootReducer = (state = initialState, action) => {
//     return state;
// }

const store = createStore(allreducers, composeWithDevTools());


store.subscribe(() => {
    console.log(['subscription done'], store.getState());
});
console.log(store.getState());
store.dispatch({ type: 'INC_COUNTER' });

store.dispatch({ type: 'DEC_COUNTER' });

store.dispatch({ type: 'MULTIPYWITHTWO' });

store.dispatch({ type: 'DIVIDEWITHTWO' });

store.dispatch({ type: 'EMPTY_COUNTER' });
console.log(store.getState());


export default store;