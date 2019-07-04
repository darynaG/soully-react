import React from 'react'
import StoryEdit from '../storyPage/storyEditor'
import PostsWithLikes from '../../containers/likedStoryline'
import '../../css/stories.css'
import '../../css/quote.css'
import '../../css/story-input.css'
import {connect} from 'react-redux'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
class StoryPage extends React.Component {
    render() {
        
        return (
            <div style={{scrollBehavior:"auto"}}>
                <StoryEdit  isMin ={true}/>
                <PostsWithLikes posts ={this.props.posts} />
                <ScrollUpButton AnimationDuration={0} />
            </div>
        )
    }

}
const mapStateToPops = (state) =>{
        return{
            posts:state.dataReducer.posts
        }   
}

export default (connect)(mapStateToPops)(StoryPage);