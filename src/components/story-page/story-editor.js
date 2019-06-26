import React ,{ Component}from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { onAddPost } from '../../actions/index.js';
import P from '../../data/posts'
import store from '../../store/index.js';
const StoryEdit =(props)=>{
   
    let input

    
        return(
            <div className="story-sharer minimize" id="story">
                <form className="story-input" method="post" onSubmit={e=>{      
                                e.preventDefault();
                                let t=input.value;
                                if(t.replace(/\s/g, "")!==""){
                                    var a={
                                        "mood":props.mood,
                                        "text":input.value
                                    }
                                    var j=JSON.stringify(a);
                                    input.value ='';
                                    alert('You Wrote: ' + j);
                                    store.dispatch(onAddPost(a));}
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