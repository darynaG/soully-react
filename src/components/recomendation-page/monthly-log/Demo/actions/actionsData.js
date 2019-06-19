export function fetchData() {
    return dispatch => {
        dispatch(fetchDataBegin());
        return  fetch("http://localhost:3003/soully/posts")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchDataSuccess(json));
            console.log(json);
            return json.posts;
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

export const fetchDataBegin = () => ({
    type: 'FETCH_DATA_BEGIN'
});

export const fetchDataSuccess = posts => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: { posts }
});

export const fetchDataFailure = error => ({
    type: 'FETCH_DATA_FAILURE',
    payload: {error}
});