const wallet = (state = { balance: 0 }, action) => {
    switch (action.type) {
        case 'SET_BALANCE':
            return { ...state, balance: action.amount }

        case 'CREDIT_BALANCE':
            return { ...state, balance: state.balance + action.amount }

        case 'DEBIT_BALANCE':
            return { ...state, balance: state.balance - action.amount }
            
        default:
            return state;
    }
}

export default wallet;
