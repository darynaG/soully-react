const initialState = {
    posts: [],
    loading: false,
    error: null
};

export default function dataReducer(state=initialState, action) {
    let value=state.posts;
    switch(action.type) {
      
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