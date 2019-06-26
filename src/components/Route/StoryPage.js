import React from 'react'
import StoryEdit from "../../containers/story-editor"
import PostsWithLikes from '../../containers/LikedStoryline'
import '../../css/stories.css'
import '../../css/quote.css'
import '../../css/story-input.css'
class StoryPage extends React.Component {
    render() {
        return (
            <div>
                <StoryEdit  isMin ={true}/>
                <PostsWithLikes posts ={this.props.postst} />
            </div>
        )
    }

}
const mapStaeToPops = (state) =>{
        return{
            posts:state.loadData.posts
        }
    
}
export default StoryPage;