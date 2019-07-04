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

  