import React from 'react';
class Check extends React.Component {
    constructor(props) {
        super(props); 
        };
    render (){
       let imgElement;
       let showlabel;
       
       if (this.props.checked) {
        imgElement = <img className="imgA" src = {this.props.imgClicked}/>;
        showlabel = "showLabel";
      } else {
        imgElement = <img className="imgA" src = {this.props.img}/>;
        showlabel = "hideLabel";
      }
        return (
            <div   className="flex-item"  >
                <label>        
            <input className="hide"
                name="activity"
                id = {this.props.mood}
                type={this.props.type}   
                value={this.props.mood}
                
                checked = {this.props.checked}
                
                onChange = {this.props.onClick}
               />
         {imgElement}   
         <h6 className= {showlabel} > {this.props.mood}</h6>
        
          </label>    
    </div>
        )

        
    }
}
/*
const Check = (props) => (
    <div   className="flex-item" style = {{marginTop:"300px"}} >
                <label>        
            <input 
                name="activity"
                id = {props.mood}
                type={props.type}   
                value={props.mood}
                
                checked = {props.checked}
                
                onChange={props.onClick}
               />
            
        <h6 className="h5-label"> {props.mood}</h6> 
        if (props.checked)
        {
          <img className={props.mood} src = {props.img}/>  
        }            
        else 
        {
             <img className={props.mood} src = {props.imgClicked}/>  
        }
          </label>    
    </div>
)*/
export default Check;