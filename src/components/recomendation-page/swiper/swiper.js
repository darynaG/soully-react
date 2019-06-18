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
import Books from '../../../data/book.js'
import Films from '../../../data/film.js'
import Actions from '../../../data/do.js'
library.add(
    faAngleLeft,
    faAngleRight
)
class Recomendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            contents:[],
            arrowNext: arrowRight,
            arrowPrev: arrowLeft
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    componentDidMount(){
        let content = [];
        switch(this.props.category){
            case("books"):
            var books=Books.getAll().then((data)=>{
                for(let i=0;i<data.length;i++){
                    if(this.props.mood==data[i].mood) content.push(data[i]);
                }
            })
            .then(()=>{
               this.setState({
                    contents:content
                });
            })
            break;
            case("films"):
            var films=Films.getAll().then((data)=>{
                for(let i=0;i<data.length;i++){
                    if(this.props.mood == data[i].mood)
                    content.push(data[i]);
                }
            })
            .then(()=>{
                this.setState({
                    contents: content
                });
            })
            break;
            case("activities"):
            var activities=Actions.getAll().then((data)=>{
                for(let i=0;i<data.length;i++){
                    if(this.props.mood == data[i].mood)
                    content.push(data[i])
                }
            })
            .then(()=>{
                this.setState({
                    contents:content
                });
            })
            break;
            
        }
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



 
