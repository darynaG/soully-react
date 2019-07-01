import { connect } from 'react-redux'
import { onAddPost,fetchDataFailure,fetchDataSuccess,fetchDataLoading } from '../actions';

import {Posts} from '../components/storyPage/storyline';


const onLike = (post) => ({ type: 'LIKE_POST', post });
const onUnlike = (post) => ({ type: 'UNLIKE_POST', post });
function mapStateToProps(state) {
  return {
    posts: state.dataReducer,
    postsLikes: state.postsLikes,
    postsLikeCounters: state.postsLikeCounters
    
  };
};
const mapDispatchToProps = {
  onLike,
  onUnlike,
  onAddPost,
  fetchDataFailure,
  fetchDataSuccess,
  fetchDataLoading


};
const PostsWithLikes = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsWithLikes
