const initialState = {
  post: null
}
export function postsAdd(state = initialState, action) {
  switch (action.type) {

    case 'NEW_POST_CREATED':
      return {
        ...state,
        post: action.post
      };
    default:
      return state;
  }
}