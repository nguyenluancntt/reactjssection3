import React, {Component} from 'react';

class UserInput extends Component{
    render(){
        const style = {
            padding: '10px',
            margin: '20px',
        }
        return(
            <input style={style} type='text' onChange={this.props.changed} value={this.props.UserName} />
        );
    }
}

export default UserInput;