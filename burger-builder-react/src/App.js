import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(){
    super();
    this.state={
      person:[
        {name:"Guru", age:"29"},
        {name:"Murali", age:"20"},
        {name:"raviKumar", age:"15"}
      ]
    }
  }
 
  switchHandler=(newName)=>{
    // console.log("Was Clicked...");
    // this.state.person[0].name="guruBrahma";
    this.setState({
      person:[
        {name:newName, age:"29"},
        {name:"Krish", age:"20"},
        {name:"raviKumar", age:"55"}
      ]
    })
  }

  nameChangeHandler = event =>{
    this.setState({
      person:[
        {name:'Max', age:"29"},
        {name:event.target.value, age:"20"},
        {name:"RaviKumar", age:"19"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is Realy Working!!!</p>
      <button onClick={this.switchHandler.bind(this,"ButtonClick")}>Switch</button>
     <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
     <Person name={this.state.person[1].name}
              age={this.state.person[1].age}
              click={this.switchHandler.bind(this,"PersonCLICK")}
              changed={this.nameChangeHandler}
      >Business Developement Team</Person>
     <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
     
   
      </div>
    
    );
  }
}

export default App;
