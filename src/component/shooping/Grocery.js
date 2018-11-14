import React, { Component } from 'react';
import { Card, CardTitle, Button, CardText } from 'reactstrap';
import Transaction from '../Transaction'

class Grocery extends Component {
    render() {

        return (
            <React.Fragment>
                <Transaction/>
                <Card body>
                    <CardTitle>Your Groceries from {this.props.balance}</CardTitle>
                    <CardText>Because midnight food is a necessity</CardText>
                    <Button>Add a Transaction</Button>
                </Card>
            </React.Fragment>
        );
    }
}

export default Grocery;