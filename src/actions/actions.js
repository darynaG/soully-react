
export default function fetchData(route) {
    return dispatch => {
        return  fetch(route)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
}

function handleErrors(responce) {
    if(!responce.ok){
        throw Error(responce.statusText)
    }
    return responce;
}

export const fetchDataSuccess = posts => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: { posts }
});
export const fetchDataSuccessUsers = users => ({
    type: 'FETCH_DATA_SUCCESS_USERS',
    payload: { users}
});
export const fetchDataFailure = error => ({
    type: 'FETCH_DATA_FAILURE',
    payload: {error}
});


