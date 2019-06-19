import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Post from '../components/story-page/message'
import { likeStory } from '../actions/actions';

const mapStateToProps = (state, ownProps) => ({
  visible: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(likeStory(ownProps.index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)