import React from 'react';
import Stories from '../../../data/stories.json';
import FontAwesome from '../../../data/fontawesome.json';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  
    faQuoteLeft,
    faQuoteRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { runInThisContext } from 'vm';
library.add(
    faQuoteLeft,
    faQuoteRight
)
class DailyMood extends React.Component{
    constructor(props){
        super(props);
        var mood_stories=[];// choose stories for your mood only 
        Stories.map((data,index)=>{ if(this.props.username==data.username) mood_stories.push(data);})
        var actions=[];
        this.state={ username:this.props.username,mood:this.props.mood, actions:this.props.actions,stories:mood_stories}
    }
   
   

    render(){
        const actions_=this.state.actions.map((action)=>
        <li>{action}</li>);
        const stor=this.state.stories.map((story)=>
        <ol>
            <FontAwesomeIcon icon={faQuoteLeft}> </FontAwesomeIcon>
        <article className="story_text">
        {story.text}
        </article>
        <FontAwesomeIcon icon={faQuoteRight}>
            </FontAwesomeIcon></ol>);
        
        return(
            <div className="daily-log">
                <h1>Daily mood</h1>
                <i className="fa fa-close"></i>
                <div className="mood">
                <h1> Your mood is {this.state.mood}</h1>
                </div>
                <div className="action">
                    <h1>You've been up to</h1>
                    <ul>
                       {actions_}
                    </ul>
                </div>    
                 <div class="stories">
                     <h3>Your story:</h3> 
                       <ul>{stor}</ul>
                       </div>
      

                
            </div>

        );
    }
  

}
export default DailyMood;
/*
function DailyMood(){
    return(
       
        <div class="daily-log"   >
  
        <h1 id="daily_log">Daily mood</h1>
        <div class="mood">
            <h3>Your mood is</h3>
            <FontAwesomeIcon
                  icon={faSadTear} 
                  size="5x"
                />
            
        </div>
        <div class="action">
            <h3> You did it today:</h3>
            <ul class="block">
           <li class="flex-item">
                <i class="fas fa-glass-whiskey fa-3x"> </i>
                </li>
           <li class="flex-item">  
               <i class="fas fa-table-tennis fa-3x"></i>
           </li>
           <li class="flex-item"> 
                   <i class="fas fa-couch fa-3x"></i>
           </li>
           <li class="flex-item"> 
           <i class="fas fa-walking fa-3x"></i> 
           </li > 
       </ul>
       </div>
       <div class="stories">
           <h3>Your story:</h3> 
           <div class="story">
                                    
           <article class="story_text">
                   <i class="fas fa-quote-left ">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore totam aut, ex commodi provident maiores quasi laboriosam eligendi perferendis recusandae incidunt aperiam porro cum illo quaerat officiis, iure tempora voluptate.
               <i class="fas fa-quote-right"></i></i>
           </article>
       </div>
       <div class="story">
                                    
               <article class="story_text">
                       <i class="fas fa-quote-left ">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore totam aut, ex commodi provident maiores quasi laboriosam eligendi perferendis recusandae incidunt aperiam porro cum illo quaerat officiis, iure tempora voluptate.
                   <i class="fas fa-quote-right"></i></i>
               </article>
           </div>

</div>
</div>
    );

}
export default DailyMood;
*/