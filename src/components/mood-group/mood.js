import React from 'react';


class Mood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            mood : this.props.mood
            
        };
                    
 }
                
    render() {
      return (
          <div   className="flex-item" style = {{marginTop:"300px"}} >
              
          
<label>        <input className="hide"
               
              name="mood"
              type="radio"
             
              value={this.state.mood}
                onClick={this.props.onRadioChange}
               />
             <i style = {{fontSize:"100px", fontStyle:"normal"}}> &#128540;</i>
        <h6 className="h5-label"> {this.state.mood}</h6>
         
          </label>    
          </div>
      );
    }
  }
  export default Mood
/*

class Mood extends React.Component{
constructor(props) {
        super(props);
        this.state = {  
            mood = this.props.mood,
            img = this.props.img
        };
                    
        this.handleInputChange = this.handleInputChange.bind(this);
                      }
            
        handleInputChange(event) {
                         
        const target = event.target;
        const value =  target.value;
        const name = target.name;
                        
            this.setState({
                 [name]: value
                          }); 
                console.log(this.state);
        }
             
        render ()
        {
        return (          
        <li className="flex-item">  
        <label>
        <input 
            type="radio" className="hide" name="mood" value={this.state.mood} checked ={this.state.mood === this.state.mood} onChange={this.handleInputChange}
            />
                
        <img src =""/>
        <h6 className="h5-label">sad</h6>
        </label>
        </li>
        );
        }
    }
    export default Mood
    */