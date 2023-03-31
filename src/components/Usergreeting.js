import React, { Component } from 'react';
class Usergreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin: false
    }
  }
    
  render() {
    return(
      this.state.isLoggedin  ?
      (<div><h1>Welcome Saichandu</h1></div>)  :
      (<div>Welcome Guest</div>)
    )

    /*let message
    if(this.state.isLoggedin){
      message=<div><h1>Welcome Saichandu</h1></div>
    }
    else{
      message=<div>Welcome Guest</div>
    }
    return(<div>{message}</div>)
    */
     /*if(this.state.isLoggedin){
      return(<div><h1>Welcome saichandu</h1></div>)
     }
     else{
      return(<div>Welcome Guest</div>)
     }*/
  }
}

export default Usergreeting