import React ,{ Component}from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { onAddPost } from '../../actions/index.js';
import P from '../../data/posts'
import store from '../../store/index.js';
import Messages from '../../data/posts';
const StoryEdit =(props)=>{
   
    let input
    let divElement;
    var c1,c2,c3,c4;
  
    if (props.isMin === true){
        c1="row-container";
        c2="story-text min" ;
        c3="round-btn min-btn";
        c4="story-sharer minimize";
        console.log("true",c1,c2,c3)
    }else{
        c1="story-sharer";
        c2="story-text " ;
        c3="round-btn ";
        c4="story-sharer ";
        console.log("false",c1,c2,c3)
    }
    
    divElement =<div className={c4} id="story">
    <form className="story-input" method="post" onSubmit={e=>{      
                    e.preventDefault();
                    let t=input.value;
                    if(t.replace(/\s/g, "")!==""){ var a={

                        "name":"sasha",
                        "email":"my@gmail.com",
                        "password": "123456"
                    }
                        var j=JSON.stringify(a);

                       Messages.newPost(j);
                        input.value ='';}
                    }}>
        <div className={c1}>
                    <h5 className="h3-label" >Share your story</h5>
         <textarea className={c2 } name="subject" placeholder="Write something.." ref={node=>input=node} ></textarea>
         <button className={c3} type="submit"  > Share</button>
         
         </div>
    </form>
 </div>
 
    
        return( divElement
        
        )
}
export default (StoryEdit);