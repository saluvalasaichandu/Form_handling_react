/*import React from 'react'

function NameList() {
    const names=['sai','chandu','saichandu']
  return (
    <div>
        {/*<h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        */ //}
       //{ names.map(x=> <h2>{x}</h2>)}</div>
  //)
//}

//}


import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['abc','ijk','pqrs','xyz']

  //const namelist=names.map(namee=><h1>{namee}</h1>)
  const namelist=names.map((namee,index)=><h1 key={index}>index value is: {index} name is: {namee}</h1>)
  return(<div>{namelist}</div>)
}

export default NameList