import React, {Component} from 'react'
import './UserOutPut.css';
class UserOutput extends Component {
    render(){
        return (
            <div className='container'>
                <p>User name: {this.props.UserName}</p>
                <p>Age: {this.props.Age}</p>
            </div>
        );
    };
}


export default UserOutput;