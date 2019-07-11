export function posts(state = [], action) {
  return state;
}

export function postsLikes(state=[] , action) {
  switch (action.type) {
    case 'LIKE_POST':
       
      return {
        ...state,
        
        [action.payload.post.id]: true
      };
    case 'UNLIKE_POST':
      return {
        ...state,
        [action.payload.post.id]: false
      };

    default:
      return state;
  }
}

export function postsLikeCounters(state = [], action) {
  let value;
  
  switch (action.type) {
    case 'LIKE_POST':
      value = state[action.payload.post.id] || 0;

      return {
        ...state,
        [action.payload.post.id]: value + 1
      };
    case 'UNLIKE_POST':
      value = state[action.payload.post.id] || 0;

      return {
        ...state,
        [action.payload.post.id]: value-1
      };
    default:
      return state;
  }
}

