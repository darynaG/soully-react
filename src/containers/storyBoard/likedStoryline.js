import { connect } from 'react-redux'

import { fetchDataFailure, fetchDataSuccess, fetchDataLoading } from '../../actions/data.actions';
import { onAddPost, onLike, onUnlike } from '../../actions/post.actions'

import { Posts } from './storyline';

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
