import React from 'react'
import im1 from '../../assets/img/camera.jpeg'
import likeim from '../../assets/img/like.png'
import Messages from '../../data/posts';
import {
    faQuoteLeft,
    faQuoteRight,

} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import store from '../../store'

class Post extends React.Component {
   
    render() {
        let check;
        if(this.props.liked===undefined) check=this.props.localData.isLiked;
        else check=this.props.liked;
        //if(this.props.localData.isLiked>0){this.props.onLike(this.props.post);}
        return (
            <div className="story" >
                <div className="story_head">
                    <img className="image_user" src={im1} alt=''/>
                    <div> {this.props.localData.username}</div>
                </div>
                <br />
                <article className="story_text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    {this.props.localData.text}
                    <FontAwesomeIcon icon={faQuoteRight} />
                </article> {

                    check? (
                        <button className="story_footer" onClick={() => {this.props.onUnlike(this.props.post); Messages.unlikePost(JSON.stringify({"story_id":this.props.post.id, "user_id":store.getState().authentication.user.user.id}));}} style={{ color: 'red' }}>
                            <div> {"Hugs:" + ' ' + this.props.likes} </div> <img className="like_img " src={likeim}></img>
                        </button>
                    ) : (
                            <button className="story_footer" onClick={() => {this.props.onLike(this.props.post); Messages.likePost(JSON.stringify({"story_id":this.props.post.id, "user_id":store.getState().authentication.user.user.id}));}} style={{ color: 'black' }}>
                                <div>{"Hugs:" + ' ' + this.props.likes}</div> <img className="like_img grey" src={likeim}></img>

                            </button>
                        )
                }

            </div>
        );
    }
}
export default Post
