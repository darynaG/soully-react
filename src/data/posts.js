import {fetchDataSuccess,fetchDataFailure, fetchDataLoading, fetchDataSuccessUsers} from '../actions'

import store from '../store';
class Messages{
    static getAll(){
        store.dispatch(fetchDataLoading());
        return fetch('http://127.0.0.1:5000/api/users')

        .then(response=> response.json()
        ) .then(json => {
            store.dispatch(fetchDataSuccessUsers(json))
           
            return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static getAllPostsForUser(userId){
        store.dispatch(fetchDataLoading());
        return fetch('http://192.168.1.21/api/users'+userId+'/posts')

        .then(response=> response.json()
        ) .then(json => {
            store.dispatch(fetchDataSuccess(json))
           
            return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static newPost = post=>{
        const options={
            method:"PUT",
            headers:new Headers({
                'Content-Type':'application/json'
            }),
            body:post
        }
        return fetch('http://localhost:3002/soully/add-post',options)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
}


export default Messages;