import React from 'react';
const Greet=(props)=>{
    console.log(props.name)
    return(
        <div>
           <h1>My name is {props.name} age is {props.age}</h1> 
           
        </div>
        
    )
}
export default Greet;
