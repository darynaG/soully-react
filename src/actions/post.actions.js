import {actionType} from '../constants'

export const onCreatePost = (post) => ({
    type: actionType.NEW_POST_CREATED,
    post
  })
  
  export const onAddPost = (post) => ({
    type: actionType.NEW_POST_ADDED,
    payload: { post }
  })
  export const onLike = (post) => ({ 
    type: actionType.LIKE_POST,
    payload:{post}
   });
  export const onUnlike = (post) => ({
     type: actionType.UNLIKE_POST,
     payload:{post}
     });