import React from 'react';
import { chooseMood } from '../../actions';

class Mood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            
            img : this.props.img
            
        };
                    
 }
    
    render() {
      return (
        <div   className="flex-item" style = {{marginTop:"300px"}} >
        <label>        
    <input className="hide" 
        name="mood"
        type={this.props.type}   
        value={this.props.mood}
        //onClick={this.props.onClick} 
        onChange={this.props.onClick}
        checked = {this.props.checked}
        // <img className={this.props.mood} src = {this.state.img}/>
       />
    <img className={this.props.mood} src = {this.props.img}/>
    <h6 className="h5-label"> {this.props.mood}</h6>             
 
  </label>    
</div>
      );
    }
  }
  export default Mood
