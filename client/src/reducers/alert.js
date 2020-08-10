// import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = {
    counter: 0,
    change: 'abhi'
};


const reducers1 = (state = initialState, action) => {


    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
                change: state.change + 'shek'
            };

        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1,
                change: state.change + 'srungeri'
            };
        case 'EMPTY_COUNTER':
            return {
                ...state,
                change: state.change + 'the boss'
            };
        default:
            return state;
    }
};

export default reducers1;