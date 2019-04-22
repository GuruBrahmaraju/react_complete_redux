import React from 'react';

const Person = props =>{
     return <p onClick={props.click}>I'm a {props.name} With Following Age : {props.age}<br/> {props.children}</p>
}

export default Person;