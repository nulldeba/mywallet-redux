export const creditBalance = amount => ({
    type: 'CREDIT_BALANCE',
    amount
})

export const debitBalance = amount => ({
    type: 'DEBIT_BALANCE',
    amount
})

export const setBalance= amount=>({
    type:'SET_BALANCE',
    amount
})