import React, {Component} from 'react';
import Bar from './Bar';
import Resturant from './Resturant';

class Food extends Component{
    render(){
        return(
        <React.Fragment>
        <h3>Food oh Yeah</h3>
        <Bar balance={this.props.balance}/>
        <Resturant balance={this.props.balance}/>
        </React.Fragment>
        );
    }
}

export default Food;