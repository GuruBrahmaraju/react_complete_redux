import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is Realy Working!!!</p>
      <Person name='Guru' age='29'/>
      <Person name='Ravi' age='28'>Working In Oracel</Person>
      <Person name='Ajay' age='20'/>
      </div>
    
    );
  }
}

export default App;
