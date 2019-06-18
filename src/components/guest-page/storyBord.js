import React ,{ Component}from 'react';
import Messages from '../../data/posts.js';
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
       
      
      // this.state={visibility:props.visible,mood:props.mood,stories:mood_stories, i:rand};
        this.state={stories:[]};
        //console.log(this.state)
       
    }
    componentDidMount(){
        var mood_stories=[];
        var a=Messages.getAll().then((data)=>{
            var maxNumber=data.length-2;
            var rand=Math.floor(Math.random()*maxNumber);
            for(var i=rand;i<rand+2;i++){
                if(this.props.mood){
                    if(this.props.mood==data[i].mood)
                    mood_stories.push(data[i]);
                }else{
                    mood_stories.push(data[i]);
                }
      
    }
        })//.then(()=>{console.log("this is mood_stories",mood_stories.length)})
        .then(()=>{
            
            this.setState({stories:mood_stories});
        })
    }
    render(){
    return(
        <React.Fragment>
            <h1 >Stories</h1>
        <div className="storyboard">
       
    <div className="story_column left">
         {
             this.state.stories.map((data)=>{
                 return(
<div></div>
                 )
             })
         }
           
    </div>

    <div className="story_column right">
    <div className="story">
                    
                   
                    
            </div>
        
    </div>
</div>
</React.Fragment>
    );
};
}
export default StoryBoard;