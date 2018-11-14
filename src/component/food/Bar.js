import React, {Component} from 'react';

class Bar extends Component{
    render(){

        return(<div><b>Bar: </b> Only When friends get together. : {this.props.balance} </div>);
    }
}

export default Bar;