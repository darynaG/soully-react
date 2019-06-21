import React ,{ Component}from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { addTodo } from '../actions/index.js';
import P from '../data/posts'
const StoryEdit =(props)=>{
   
    let input

    
        return(
            <div className="story-sharer minimize" id="story">
           
                <form className="story-input" onSubmit={e=>{      
                                e.preventDefault();
                                    var a={
                                        "mood":props.mood,
                                        "text":input.value
                                    }
                                    
                                    var j=JSON.stringify(a);
                                   
                                    input.value ='';
                                   
                                    alert('You Wrote: ' + j);
                                    //add json to file
                                //update storyline
                                }}>
                    <div className="row-container">
                    <h5 className="h3-label">Share your story</h5>
                    <textarea className="story-text min" name="subject" placeholder="Write something.." ref={node=>input=node} ></textarea>
                    <button className="round-btn min-btn"  type="submit"  > Share</button>
                    </div>
                </form>
             </div>
        )
    
}
export default (StoryEdit);