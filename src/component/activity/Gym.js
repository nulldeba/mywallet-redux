import React, { Component } from 'react';

class Gym extends Component {
    render() {

        return (<div> <b>Gym: </b>Get you best version .{this.props.balance}</div>);
    }
}

export default Gym;