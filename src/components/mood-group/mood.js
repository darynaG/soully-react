import React from 'react';
import { chooseMood } from '../../actions';
/*class Mood extends React.Component {
    constructor(props)
    {
    super(props);

    this.state = {
        img = this.props.img
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
                onClick={this.props.onClick}
                checked = {this.state.img = this.props.imgClicked}
               />
            <img src = {this.state.img}/>
        <h6 className="h5-label"> {this.props.mood}</h6>             
         
          </label>    
    </div>
    );
}
}
export default Mood
*/
/*
const Mood = (props) => (
    <div   className="flex-item" style = {{marginTop:"300px"}} >
                <label>        
            <input className="hide"
                name="mood"
                type={props.type}   
                value={props.mood}
                onClick={props.onClick}
                checked = {}
               />
            <img src = {props.img}/>
        <h6 className="h5-label"> {props.mood}</h6>             
         
          </label>    
    </div>
)

export default Mood;*/

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
        onClick={this.props.onClick} 
        //onChange={this.state.img = this.props.imgClicked}
        //checked = {this.state.img = this.props.imgClicked}
        // <img className={this.props.mood} src = {this.state.img}/>
       />
    <img className={this.props.mood} src = {this.state.img}/>
    <h6 className="h5-label"> {this.props.mood}</h6>             
 
  </label>    
</div>
      );
    }
  }
  export default Mood
