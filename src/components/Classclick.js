import React, { Component } from 'react'

class Classclick extends Component {
    clickhandler(){
        console.log("class button was clicked ")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Classclick</button></div>
    )
  }
}

export default Classclick