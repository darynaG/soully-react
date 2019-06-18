import React ,{ Component}from 'react';
import Messages from '../../data/posts.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StoryBoard extends Component {
    constructor(props){
        super(props);
       
        var mood_stories=[];// choose stories for your mood only
        if(props.mood){
       Messages.map((data,index)=>{ if(this.props.mood==data.mood) mood_stories.push(data);})}
       else {
        Messages.map((data,index)=>{ mood_stories.push(data);})
       }
        var maxNumber=mood_stories.length-2;
        var rand=Math.floor(Math.random()*maxNumber);
       this.state={visibility:props.visible,mood:props.mood,stories:mood_stories, i:rand};

        //console.log(this.state)
       
    }
    
    render(){
    return(
        <div className="storyboard">
       
    <div className="story_column left">
            <div className="story">
                    
                    <div className="story_head">
                       
                       <div> {this.state.stories[this.state.i].username}
                       </div>
                    </div>
                   
                    {this.state.stories[this.state.i].text}
              
                    
            </div>
            <div className="story">
                    
                    <div className="story_head">
                       
                       <div> {this.state.stories[this.state.i+1].username}
                       </div>
                    </div>
                   
                    <article className="story_text"> 
                    {this.state.stories[this.state.i+1].text}
              
                    </article> 
                    
            </div>
           
    </div>

    <div className="story_column right">
    <div className="story">
                    
                    <div className="story_head">
                       
                       <div> {this.state.stories[this.state.i+2].username}
                       </div>
                    </div>
                   
                    <article className="story_text">
                    {this.state.stories[this.state.i+2].text}
              
              </article> 
                    
            </div>
        
    </div>
</div>
    );
}
}
export default StoryBoard;