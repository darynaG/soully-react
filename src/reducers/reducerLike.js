
const postsData=[
  {
  id:1,
  "mood":"sad",
  "username": "Aizek",
  "date":"2019-06-18",
  likes:2,
  "text": "No matter how much the world tries to hold you back, always continue with the belief that what you want to achieve is possible. Believing you can become successful is the most important step in actually achieving it."
},
{
  id:2,
  "mood":"sad",
  "username": "Alice",
  "date":"2019-05-18",
  likes:5,
  "text": "FFFFFFF matter how much the world tries to hold you back, always continue with the belief that what you want to achieve is possible. Believing you can become successful is the most important step in actually achieving it."
},
{
  id:3,
  "mood":"sad",
  "username": "Tom",
  "date":"2019-06-19",
  likes:8,
  "text": "Thow much the world tries to hold you back, always continue with the belief that what you want to achieve is possible. Believing you can become successful is the most important step in actually achieving it."
},
{
  id:4,
  "mood":"happy",
  "username": "Jack",
  "date":"2019-06-18",
  likes:1,
  "text": "YYYY matter how much the world tries to hold you back, always continue with the belief that what you want to achieve is possible. Believing you can become successful is the most important step in actually achieving it."
}]
//do loading from server
   
const initialState = {
  posts: postsData,
  postsLikeCounters: postsData.reduce((out, post) => {
    return {
      ...out,
      [post.id]: post.likes
    };
  }, {})
};

export function posts(state=initialState.posts, action) {
  return state;
}

export function postsLikes(state={}, action) {
  switch (action.type) {
    case 'LIKE_POST':
      return {
        ...state,
        [action.post.id]: true
      };
    case 'UNLIKE_POST':
      return {
        ...state,
        [action.post.id]: false
      };
    default:
      return state;
  }
}

export function postsLikeCounters(state=initialState.postsLikeCounters, action) {
  let value;

  switch (action.type) {
    case 'LIKE_POST':
      value = state[action.post.id] || 0;
      
      return {
        ...state,
        [action.post.id]: value + 1
      };
    case 'UNLIKE_POST':
      value = state[action.post.id] || 0;

      return {
        ...state,
        [action.post.id]: Math.max(value - 1, 0)
      };
    default:
      return state;
  }
}

