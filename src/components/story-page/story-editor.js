import React ,{ Component}from 'react';
import Messages from '../../data/posts.json';
import im1 from '../../assets/img/camera.jpeg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StoryEdit extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.wasAdded=this.wasAdded.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            value: ''
          };
    }
    handleChange(event) {
        this.setState({value: event.target.value});
       
      }
    wasAdded(event){
      
        var a={
            "mood":"happy",
            "text":this.state.value
        }
        
        var j=JSON.stringify(a);
        alert('You Wrote: ' + j);
       
       
        alert(typeof(Messages));
       
        //add json to file
       //update storyline
    }
    render(){
        return(
            <div className="story-sharer minimize" id="story">
           
                <form className="story-input" onSubmit={this.wasAdded}>
                    <div className="row-container">
                    <h5 className="h3-label">Share your story</h5>
                    <textarea className="story-text min" name="subject" placeholder="Write something.." onChange={this.handleChange}></textarea>
                    <input className="round-btn min-btn"  type="submit"  value="Share" />
                    </div>
                </form>
             </div>
        )
    }
}
export default StoryEdit;