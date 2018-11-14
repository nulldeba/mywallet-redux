import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debitBalance, creditBalance } from '../action/MyWallet'


class Transaction extends Component {
    constructor(props) {
        super(props);
        this.transactionValueRef = React.createRef();
        this.creditBalance = this.creditBalance.bind(this);
        this.debitBalance = this.debitBalance.bind(this);
    }

    //Check for NAN Value
    creditBalance() {
        if (!isNaN(this.transactionValueRef.current.valueAsNumber))
            this.props.creditBalance(this.transactionValueRef.current.valueAsNumber);
        this.transactionValueRef.current.value = '';
    }

    //Check for NAN Value
    debitBalance() {
        if (!isNaN(this.transactionValueRef.current.valueAsNumber))
            this.props.debitBalance(this.transactionValueRef.current.valueAsNumber);
        this.transactionValueRef.current.value = '';

    }
    render() {
        return (<React.Fragment>
            <div><input type='number' ref={this.transactionValueRef} /></div>
            <div>
                <button onClick={this.debitBalance}>debit</button>
                <button onClick={this.creditBalance}>credit</button>
            </div>

        </React.Fragment>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    creditBalance: (amount) => (dispatch(creditBalance(amount))),
    debitBalance: (amount) => (dispatch(debitBalance(amount)))
})
const mapStateToProps = (state) => ({
    balance: state.balance
})
export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
