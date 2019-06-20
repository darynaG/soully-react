import React ,{ Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Q from '../../data/quotes.js';

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
class Quote extends Component{
constructor(props){
    super(props);
    
   this.state={
       //mood:props.mood,
       
       text:"",//mood_quotes[rand].text,
       author: ""//mood_quotes[rand].author
    
   }



}
componentDidMount(){    
    var mood_quotes=[];
    var a=Q.getAll().then((data)=>{
        for(var i=0;i<data.length;i++){
            if(this.props.mood){
                if(this.props.mood==data[i].mood)
                mood_quotes.push(data[i]);
            }else{
                mood_quotes.push(data[i]);
            }
  
}
    })//.then(()=>{console.log("this is mood_quotes",mood_quotes.length)})
    .then(()=>{
        var maxNumber=mood_quotes.length;
        var rand=Math.floor(Math.random()*maxNumber);
        this.setState({text:mood_quotes[rand].text, author:mood_quotes[rand].author});
    })
}
render(){
    return(
        <div className="centered-text">  
    
           <article>
               {this.state.text}
              <br></br>
               <p>-{this.state.author}-</p>
           </article>
    </div> 
    )
}
}
export default Quote;
