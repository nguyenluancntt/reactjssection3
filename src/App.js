import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOuput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  state = {
    users: [
      {
        'UserName': 'abc',
        'Age': 21
      },
      {
        'UserName': 'def',
        'Age': 26
      }
    ]
  }
  switchUserHandler = (newName) =>{
    this.setState(
      {
        users: [
          {
            'UserName': newName,
            'Age': 21
          },
          {
            'UserName': 'def',
            'Age': 26
          }
        ]
      }
    );
  }
  nameChangeHandler = (event) => {
    console.log(event);
    this.setState(
      {
        users: [
          {
            'UserName': event.target.value,
            'Age': 21
          },
          {
            'UserName': 'def',
            'Age': 26
          }
        ]
      }
    );
  }
  render() {
    return (
      <div>
        <UserInput changed={this.nameChangeHandler} />
        <input type='submit' name='ChangeName' onClick={this.switchUserHandler.bind(this, 'abcd')} />
        <UserOuput UserName={this.state.users[0].UserName} 
                  Age={this.state.users[0].Age}
                  />
      
      </div>
    );
  }
}

export default App;
