
import './index.css';
import Profile from './Profile';
import React from 'react';

function App() {
  const[name,setName]=React.useState("Narinder") 

  
    
  
      
        
        return(
          <div className="App">
            <h1>React Method in React</h1>
            <Profile name={name}/>
            <button onClick={()=>setName("Singh")}>Update Name</button>
          </div>
         
      );
      
   

}
export default App;


    
     
