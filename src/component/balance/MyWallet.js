import React, { Component } from 'react';
import Shopping from '../shooping/Shopping';
import Food from '../food/Food';
import Activity from '../activity/Activity';
import { connect } from 'react-redux';
import { setBalance } from '../../action/MyWallet';
import { Button, InputGroup, InputGroupAddon, Input, Row, Col } from 'reactstrap';

class MyWallet extends Component {

    constructor(props) {
        super(props);
        this.balanceRef = React.createRef();
        this.setInitialAmount = this.setInitialAmount.bind(this);
    }
    
    //check for NAN value
    setInitialAmount() {
        if(!isNaN(this.balanceRef.current.valueAsNumber))
        this.props.setBalance(this.balanceRef.current.valueAsNumber);
        this.balanceRef.current.value = '';
    }


    render() {
        return (<React.Fragment>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input placeholder="Enter your amount" innerRef={this.balanceRef} type="number" step="1" />
                    <InputGroupAddon addonType="append"><Button color="secondary"  onClick={this.setInitialAmount}>ADD</Button></InputGroupAddon>
                </InputGroup>
                </Col>
            </Row>
            <div>My balance is : {this.props.balance}</div>
            <Shopping/>
            <Food balance={this.props.balance} />
            <Activity balance={this.props.balance} />
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => ({
    balance: state.balance
});

const mapDispatchToProps = (dispatch) => ({
    setBalance: (amount) => dispatch(setBalance(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyWallet);
