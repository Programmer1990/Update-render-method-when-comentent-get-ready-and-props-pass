
 import React from "react";

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            email:"Narinder@gmail.com"
        }
    }
    render()
    {
        console.warn("Render method", this.state.email)
         return( 
            <div>
            
            <h1>user component </h1>
            <button onClick={()=>this.setState({email:"singh@gmail.com"})}> Update Email Address </button>
            
            </div>
        )
    
    }
  
   
 

    
}
export default Profile;
    