import React from 'react'
import ScrollTop from "react-scrolltop-button";
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
                <ScrollTop className="round-btn" text="Up"    style={{ backgroundColor: "transparent" ,"border-radius": "50%",  "font-weight":"bold","border-color":"#004d40"}}/>
 

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