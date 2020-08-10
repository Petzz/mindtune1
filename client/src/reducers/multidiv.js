const initialState = {
    flag: true,
    counter: 3
}

const multidivreducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MULTIPYWITHTWO':
            return {
                ...state,
                counter: state.counter * 3
            };
        case 'DIVIDEWITHTWO':
            return {
                ...state,
                flag: state.flag,
                counter: state.counter / 1
            }
        default: return state
    }

}

export default multidivreducer;