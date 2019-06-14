import React from 'react';

import arrowRight from '../../../img/book.jpeg';
import arrowLeft from '../../../img/film.jpeg';
import '../../../css/swiper.css';
import {
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Books from '../../../data/book.json'
import Films from '../../../data/film.json'
import Actions from '../../../data/do.json'
library.add(
    faAngleLeft,
    faAngleRight
)
class Recomendation extends React.Component {
    constructor(props) {
        super(props);
        let content=[];
        switch(this.props.category){
            
            case("books"):
            Books.map((data,index)=>{if(this.props.mood==data.mood) content.push(data);})
            break;
            case("films"):
            Films.map((data,index)=>{if(this.props.mood==data.mood) content.push(data);})
            break;
            case("activities"):
            Actions.map((data,index)=>{if(this.props.mood==data.mood) content.push(data);})
            break;
            
        }
       
        
    this.state = {
       
       currentIndex: 0,
       contents: content,
       arrowNext: arrowRight,
       arrowPrev: arrowLeft
   };
   this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
}
prevSlide() {
    const lastIndex = this.state.contents.length - 1;
    const resetIndex = this.state.currentIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
       this.setState({
            currentIndex: index
       })
   }
   nextSlide() {
    const lastIndex = this.state.contents.length - 1;
    const resetIndex = this.state.currentIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentIndex + 1;
      this.setState({
          currentIndex: index
      });
   }

   render() {
    const index = this.state.currentIndex;
    let first = this.state.contents.slice(index, index + 1);

    return (
        <div className="container">
         <FontAwesomeIcon icon={faAngleLeft} size="3x"onClick={this.prevSlide}/>
         {first.map((contents)=>

         <div className="content">
            <img  src={contents.image} alt=""/>
            <h2 >{contents.title}</h2>
            <p >{contents.description}</p>
            <i className="tag">{contents.tag}</i>
          
         </div>)}
         <FontAwesomeIcon icon={faAngleRight} size="3x" onClick={this.nextSlide}/>
        </div>
       );
}

   
  
}
export default Recomendation;



 
