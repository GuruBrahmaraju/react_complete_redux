import React from 'react';

const Person = props =>{
     return <p>I'm a {props.name} With Following Age : {props.age}<br/> {props.children}</p>
}

export default Person;