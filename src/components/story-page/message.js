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


const Post= ({ data , onClick}) => (
    <div className="story">
                        
    <div className="story_head">
    <img className="image_user" src={im1}/>
    <div> {data.username}</div>
   </div>
<br/>
    <article className="story_text"> 
            <FontAwesomeIcon icon={faQuoteLeft} size="0.5x"/>
            {data.text}
             <FontAwesomeIcon icon={faQuoteRight} size="0.5x"/>
    </article> 
  <button className="story_footer">
      onClick={onClick}
  <p> Hugs: { data.hugs} </p>
  <FontAwesomeIcon icon={faGratipay} size="3x"/></button>




</div>
)
export default Post;