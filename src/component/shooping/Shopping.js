import React, { Component } from 'react';
import Fashion from './Fashion';
import Grocery from './Grocery';
import Travel from './Travel';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import  Transaction from '../Transaction';

class Shopping extends Component {
    

    
    render() {
        return (
            <React.Fragment>
                <h3>Shopping</h3>
                <Transaction />
                <Row>
                    <Col sm="4">
                        <Travel balance={this.props.balance} />
                    </Col>
                    <Col sm="4">
                    <Fashion balance={this.props.balance} />
                    </Col>
                    <Col sm="4">
                        <Grocery balance={this.props.balance} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    balance: state.balance
})
export default connect(mapStateToProps)(Shopping);