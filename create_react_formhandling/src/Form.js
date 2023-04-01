import React, { Component } from 'react'
import './Style.css'
class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         phone:'',
         course:'react'
      }
    }

    handlename=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handlephone=(e)=>{
        this.setState({
            phone:e.target.value
        })
    }
    handlecourse=(e)=>{
        this.setState({
            course:e.target.value
        })
    }
    handleSubmit = e => {
		alert(`${this.state.name} ${this.state.phone} ${this.state.course}`)
		e.preventDefault()
    }
  render() {
    const{name,phone,course}=this.state
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        
        <div>
            <label>Username</label>
            <input type="text " value={name} onChange={this.handlename}></input>
        </div>
        <div>
            <label>Userphone</label>
            <input type="text " value={phone} onChange={this.handlephone}></input>
        </div>
        <div>
            <label>Course</label>
            <select value={course} onChange={this.handlecourse}>
                <option value='react'>React</option>
                <option value='html'>Html</option>
                <option value='css'>Css</option>
            </select>
        </div>
        <button type='submit'>SUBMIT</button>
        

     </form>
      
    )
  }
}

export default Form