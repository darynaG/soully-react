import React ,{ PureComponent}from 'react';

import Q from '../../data/quotes.js';

import { library } from '@fortawesome/fontawesome-svg-core'

import {
        faQuoteLeft,
        faQuoteRight
  
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faQuoteLeft,
    faQuoteRight
)
class Quote extends PureComponent{
constructor(props){
    super(props);
    
   this.state={
       //mood:props.mood,
       all:[],
       text:"",//mood_quotes[rand].text,
       author: ""//mood_quotes[rand].author
    
   }



}
componentDidMount(){    
   
    let mood_quotes=[];
    let f=[];
    let a=Q.getAll().then((data)=>{
        for(var i=0;i<data.length;i++){
            f.push(data[i])
            if(this.props.mood){
                if(this.props.mood===data[i].mood)
                mood_quotes.push(data[i]);
            }else{
                mood_quotes.push(data[i]);
            }
  
}
    })
    .then(()=>{
        let maxNumber=mood_quotes.length;
        let rand=Math.floor(Math.random()*maxNumber);
        this.setState({text:mood_quotes[rand].text, author:mood_quotes[rand].author,all:f});
    })
}

componentDidUpdate(){
    let mood_quotes=[];
    for(var i=0;i<this.state.all.length;i++){
       
        if(this.props.mood){
            if(this.props.mood===this.state.all[i].mood)
            mood_quotes.push(this.state.all[i]);
        }else{
            mood_quotes.push(this.state.all[i]);
        }
        let maxNumber=mood_quotes.length;
        let rand=Math.floor(Math.random()*maxNumber);
        if(maxNumber>0)
        this.setState({text:mood_quotes[rand].text, author:mood_quotes[rand].author});
}
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
