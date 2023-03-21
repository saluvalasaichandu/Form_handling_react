import React from 'react'

function Functionclick() {
    function clickHandler(){
        console.log("function button  was clicked")
        
    }
    
  return (
    <div>
        <button onClick={clickHandler}>Functionclick</button>
        </div>
  )
  }


export default Functionclick