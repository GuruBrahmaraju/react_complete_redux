import React from 'react';

const Person = props =>{
     return (
          <div><p onClick={props.click}>I'm a {props.name} With Following Age :
      {props.age}<br/> {props.children}</p>
      Name : <input type='text' onChange={props.changed} value={props.name}/>
      Age : <input type='text' value={props.age} disabled />
      </div>
     )}

export default Person;