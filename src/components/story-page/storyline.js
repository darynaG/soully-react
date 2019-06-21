import React ,{ Component}from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Post from '../story-page/message'
import { far, faGratipay} from '@fortawesome/free-brands-svg-icons'
import {
        faQuoteLeft,
        faQuoteRight
  
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faQuoteLeft,
    faQuoteRight,
    faGratipay
)

export  const Posts=(props)  =>
  
       (
                    <div className="story-board">
                    <div className="leftcolumn">
                    { 
                        props.posts.map((post)=>{
                            return(
                              
                                <Post localData={post}  
                                key={post.id}  
                                post={post}
                                likes={props.postsLikeCounters[post.id]}
                                liked={props.postsLikes[post.id]}
                                onLike={props.onLike}
                                onUnlike={props.onUnlike} />
                            )

                        })
                    }  
                </div>
                </div>
            

                    );

   
   

