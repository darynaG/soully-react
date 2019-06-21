import React from 'react';
const Check = (props) => (
    <div   className="flex-item" style = {{marginTop:"300px"}} >
                <label>        
            <input 
                name="mood"
                type={props.type}   
                value={props.mood}
                //onClick={props.onClick}
                
                onChange={props.onClick}
               />
            
        <h6 className="h5-label"> {props.mood}</h6>             
         
          </label>    
    </div>
)
export default Check;