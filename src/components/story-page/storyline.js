import React ,{ Component}from 'react';
import Messages from '../../data/posts.js';
import im1 from '../../assets/img/camera.jpeg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import Post from '../story-page/message'

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
        this.state={M:[]}
    }
    componentDidMount(){
        var temp=[];
        //console.log("this is temp",temp.length);
        var a=Messages.getAll().then((data)=>{
            for(var i=0;i<data.length;i++){
            temp.push(data[i]);
        //console.log("iiii",data[i])
    }
        })//.then(()=>{console.log("this is temp",temp.length)})
        .then(()=>{
            this.setState({M:temp});
        })
    }
    render(){

       return(

                    <div className="story-board">
                    <div className="leftcolumn">
                    { 
                            this.state.M.map((data,index)=>{
                                return(

                             <Post/>
                                )

                            })
                        }  
                    
                       

                </div>
                </div>
            
                    )

    }
}
    </div>
    </div>
                            );
}

}
export default StoryLine;