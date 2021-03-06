import {actionType} from '../constants'

export const fetchDataSuccess = posts => ({
    type: actionType.FETCH_DATA_SUCCESS,
    payload: { posts }
  });
  
export const fetchDataFailure = error => ({
    type: actionType.FETCH_DATA_FAILURE,
    payload: { error }
  
  })
export const fetchDataLoading = () => ({
    type: actionType.FETCH_DATA_LOADING
  })
export const DataLoaded = () => ({
    type: actionType.DATA_LOADED
  })
export const DataLoading = () => ({
    type: actionType.DATA_LOADING
  })

  export const fetchDataSuccessId = postsPersonal => ({
    type: 'FETCH_DATA_SUCCESS_ID',
    payload: { postsPersonal }
});
export const fetchDataSuccessUsers = users => ({
    type: 'FETCH_DATA_SUCCESS_USERS',
    payload: { users}
}); 
export const fetchQuoteSuccess = quotes => ({
  type: 'FETCH_Q_SUCCESS',
  payload: { quotes }
});