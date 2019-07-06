import React from 'react'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import StoryEdit from '../../components/stories/storyEditor'
import PostsWithLikes from '../storyBoard/likedStoryline'
import '../../css/stories.css'
import '../../css/quote.css'
import '../../css/storyInput.css'
import {connect} from 'react-redux'

class StoryPage extends React.Component {
    render() {
        
        return (
            <div style={{scrollBehavior:"auto"}}>
                <StoryEdit  isMin ={true} user={this.props.user}/>
                <PostsWithLikes posts ={this.props.posts} />
                <ScrollUpButton AnimationDuration={0} />
            </div>
        )
    }
}
const mapStateToPops = (state) =>{
        return{
            posts:state.dataReducer.posts,
            user:state.authentication.user,
        }    
}
export default (connect)(mapStateToPops)(StoryPage);