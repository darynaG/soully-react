import React ,{ Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Q from '../../data/quotes';
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
    var mood_quotes=[];//quotes only for your mood
    if(props.mood){
        Q.map((data,index)=>{ if(this.props.mood==data.mood) mood_quotes.push(data);})}
        else {
         Q.map((data,index)=>{ mood_quotes.push(data);})
        }
         var maxNumber=mood_quotes.length;
         var rand=Math.floor(Math.random()*maxNumber);
   this.state={
       mood:props.mood,
       text:mood_quotes[rand].text,
       author: mood_quotes[rand].author
    
   }



}
render(){
    return(
        <div className="centered-text">  
    
           <article>
           <FontAwesomeIcon icon={faQuoteLeft} size="0.5x"/>
               {this.state.text}
               <FontAwesomeIcon icon={faQuoteRight} size="0.5x"/>
              <br></br>
               <p>-{this.state.author}-</p>
           </article>
    </div> 
    )
}
}
export default Quote;