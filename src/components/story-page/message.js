import React from 'react'
import PropTypes from 'prop-types'
import im1 from '../../assets/img/camera.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core'

import { far, faGratipay} from '@fortawesome/free-brands-svg-icons'

import {
        faQuoteLeft,
        faQuoteRight
  
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { likeStory } from '../../actions/actions';


const Post= ({ localData ,visible, onClick}) => (
    <div className="story" visibility={visible}>
                        
    <div className="story_head">
    <img className="image_user" src={im1}/>
    <div> {localData.username}</div>
   </div>
<br/>
    <article className="story_text"> 
            <FontAwesomeIcon icon={faQuoteLeft} size="0.5x"/>
            {localData.text}
             <FontAwesomeIcon icon={faQuoteRight} size="0.5x"/>
    </article> 
  <button className="story_footer" onClick={()=>{likeStory(localData.id)}}> 
      
  <p> Hugs: { localData.hugs} </p>
  <FontAwesomeIcon icon={faGratipay} size="3x"/></button>




</div>

)
export default Post;