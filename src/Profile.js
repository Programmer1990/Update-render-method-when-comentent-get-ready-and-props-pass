
 import React from "react";

class Profile extends React.Component{
    render()
    {
        console.warn("Render method", this.props)
        return( 
            <div>
            
            <h1>user component {this.props.name}</h1>
            
            </div>
        )
    
    }
  
   
 

    
}
export default Profile;
    