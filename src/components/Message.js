import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome visitor'
        }
    }
    changemessage(){
        this.setState({
            message:' Thank you! You are subscribed'
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changemessage()}}>Subscribe</button>
                
                
            </div>
        )
    }

}
export default Message;