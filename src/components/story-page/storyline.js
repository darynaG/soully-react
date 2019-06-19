import React ,{ Component}from 'react';
import Messages from '../../data/posts.json';
import im1 from '../../assets/img/camera.jpeg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*
import { library } from '@fortawesome/fontawesome-svg-core'

import { far, faGratipay} from '@fortawesome/free-brands-svg-icons'

import {
        faQuoteLeft,
        faQuoteRight
  
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faQuoteLeft,
    faQuoteRight,
    faGratipay
)*/
class StoryLine extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
         
                    <div className="story-board">
                    <div className="leftcolumn">
                        { 
                            Messages.map((data,index)=>{
                                return(
                                    <div className="story">
                        
                                <div className="story_head">
                                <img className="image_user" src={im1}/>
                                <div> {data.username}</div>
                               </div>
                           <br/>
                                <article className="story_text"> 
                                        {data.text}
                                </article> 
                              <div className="story_footer">
                              <p> Hugs: { data.hugs} </p>
                    </div>
                    </div>
                                );
                            })
                        }
                        
                    
                       
            
              
               
        );
    }
}
    </div>
    </div>
                            );
}

}
export default StoryLine;