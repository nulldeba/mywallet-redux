import React, { Component } from 'react';
import { Card, CardTitle, Button, CardText } from 'reactstrap';

class Travel extends Component {
    render() {

        return (<React.Fragment>
            <Card body>
                <CardTitle>Travel Stories from {this.props.balance}</CardTitle>
                <CardText>Sometime you need this</CardText>
                <Button>Add a Transaction</Button>
            </Card>
        </React.Fragment>
        );
    }
}

export default Travel;