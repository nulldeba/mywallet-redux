import React, {Component} from 'react';
import Dance from './Dance';
import Gym from './Gym';
import Sport from './Sports';

class Activity extends Component{
    render(){

        return(
        <React.Fragment>
        <h3>I need to improove my other skills.</h3>
        <Dance balance={this.props.balance}/>
        <Gym balance={this.props.balance}/>
        <Sport balance={this.props.balance}/>
        </React.Fragment> 
        );
    }
}
 
export default Activity;