import React from 'react'
import im1 from '../../assets/img/camera.jpeg'
import likeim from '../../assets/img/like.png'
import {
        faQuoteLeft,
        faQuoteRight,
       
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Post extends React.Component{
 
    render(){return(
    <div className="story" >
      { console.log("Post",this.props)}
                        
        <div className="story_head">
                <img className="image_user" src={im1}/>
                <div> {this.props.localData.username}</div>
        </div>
        <br/>
        <article className="story_text"> 
                <FontAwesomeIcon icon={faQuoteLeft} size="0.5x"/>
                {this.props.localData.text}
                <FontAwesomeIcon icon={faQuoteRight} size="0.5x"/>
        </article> {
            this.props.liked? (
                <button className="story_footer"  onClick={()=>this.props.onUnlike(this.props.post)} style={{color:'red'}}>  
                    <div> {"Hugs:" +' '+this.props.likes} </div> <img className="like_img " src={likeim}></img>
                </button>
            ):(
                <button className="story_footer"  onClick={()=>this.props.onLike(this.props.post)} style={{color:'black'}}>  
                <div>{"Hugs:" +' '+this.props.likes}</div> <img className="like_img grey" src={likeim}></img>
            </button>
            )
        }
       
    </div>
     ); }
}
export default Post
