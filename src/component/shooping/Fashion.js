import React, { Component } from 'react';
import { Card, CardTitle, Button, CardText } from 'reactstrap';
class Fashion extends Component {
    render() {

        return (
            <React.Fragment>
                <Card body>
                    <CardTitle>Your Fashion from {this.props.balance}</CardTitle>
                    <CardText>Who does not love it:</CardText>
                    <Button>Add a Transaction</Button>
                </Card>
            </React.Fragment>
        );
    }
}

export default Fashion;