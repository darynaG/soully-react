
const initialState = {
    
    data_loading: 0

   
};
export default function loadingReducer(state=initialState, action) {
    switch(action.type) {
    case 'DATA_LOADING':
            return {
                ...state,
                data_loading: state.data_loading+1,
              
            };
    case 'DATA_LOADED':
            return {
                ...state,
                data_loading: state.data_loading-1,
              
            };
            
            default:
                    return state;
}}
