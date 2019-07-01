import React from 'react'
import StoryEdit from '../story-page/story-editor'
import PostsWithLikes from '../../containers/LikedStoryline'
import '../../css/stories.css'
import '../../css/quote.css'
import '../../css/story-input.css'
import {connect} from 'react-redux'
class StoryPage extends React.Component {
    render() {
        
        return (
            <div>
                <StoryEdit  isMin ={true}/>
                <PostsWithLikes posts ={this.props.posts} />
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