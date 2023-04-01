import React from 'react'

function Inline() {
    const styling={
        color:'blue',
        fontSize:'72px',
        textAlign:'center',
        backgroundColor:'yellow'
    }
  return (
    <div>
        <h1 style={styling}>Inline</h1>
    </div>
  )
}

export default Inline