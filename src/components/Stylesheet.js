import React from 'react'
import './myStyle.css'
function Stylesheet() {
    let className='abc'
  return (
    <div>
        <h1 className={`${className} size align`}>Stylesheet</h1>
        
        </div>
  )
}

export default Stylesheet