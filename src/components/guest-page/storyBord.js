import React ,{ Component}from 'react';
import Messages from '../../data/posts.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'

import { far} from '@fortawesome/free-brands-svg-icons'

import {
        faQuoteLeft,
        faQuoteRight
  
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faQuoteLeft,
    faQuoteRight
)

class StoryBoard extends Component {
    constructor(props){
        super(props);
       
        var mood_stories=[];// choose stories for your mood only 
       Messages.map((data,index)=>{ if(this.props.mood==data.mood) mood_stories.push(data);})
        var maxNumber=mood_stories.length-2;
        var rand=Math.floor(Math.random()*maxNumber);
       this.state={visibility:props.visible,mood:props.mood,stories:mood_stories, i:rand};

        console.log(this.state)
        console.log(this.state.stories);
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
                   
                    <article className="story_text"> <FontAwesomeIcon icon={faQuoteLeft} size="1x"/>
                    {this.state.stories[this.state.i].text}
              
                    <FontAwesomeIcon icon={faQuoteRight} size="1x"/></article> 
                    
            </div>
            <div className="story">
                    
                    <div className="story_head">
                       
                       <div> {this.state.stories[this.state.i+1].username}
                       </div>
                    </div>
                   
                    <article className="story_text"> <FontAwesomeIcon icon={faQuoteLeft} size="1x"/>
                    {this.state.stories[this.state.i+1].text}
              
                    <FontAwesomeIcon icon={faQuoteRight} size="1x"/></article> 
                    
            </div>
           
    </div>

    <div className="story_column right">
    <div className="story">
                    
                    <div className="story_head">
                       
                       <div> {this.state.stories[this.state.i+2].username}
                       </div>
                    </div>
                   
                    <article className="story_text"><FontAwesomeIcon icon={faQuoteLeft} size="1x"/>
                    {this.state.stories[this.state.i+2].text}
              
                    <FontAwesomeIcon icon={faQuoteRight} size="1x"/></article> 
                    
            </div>
        
    </div>
</div>
    );
};
}
export default StoryBoard;