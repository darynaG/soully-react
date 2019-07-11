const initialState = {
    posts: [],
    postsPersonal: [],
    mood: [],
    activity: [],
    story: [],
    users:[],
    loading: false,
    quotes: [],
    error: null
   
    
};

export default function dataReducer(state=initialState, action) {
    let value=state.posts;
    switch(action.type) {
        case 'FETCH_DATA_LOADING':
                return {
                    ...state,
                    loading: true,
                  
                };  
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                posts: []
            };
        
        
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload.posts

          };
          case 'FETCH_DATA_SUCCESS_ID':
            return {
                ...state,
                loading: false,
                postsPersonal:action.payload.postsPersonal

          };
          case 'FETCH_DATA_SUCCESS_MOOD':
            return {
                ...state,
                loading: false,
                mood:action.payload.mood
          };
          case 'FETCH_DATA_SUCCESS_ACTIVITY':
            return {
                ...state,
                loading: false,
                activity:action.payload.activity
          };
          case 'FETCH_DATA_SUCCESS_STORY':
            return {
                ...state,
                loading: false,
                story:action.payload.story
          };
        case 'FETCH_Q_SUCCESS':
            return {
                ...state,
                loading: false,
                quotes: action.payload.quotes

          };
          case 'FETCH_DATA_SUCCESS_USERS':
            return {
                ...state,
                loading: false,
                users: action.payload.users

          };
        case 'NEW_POST_ADDED':
                value.push(action.payload.post);
                console.log("new post",value)
            return{
                ...state,
                posts: value
            }
       
        default:
            return state;
    }
}