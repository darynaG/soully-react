import {fetchDataSuccess,fetchDataFailure} from '../actions'
import { connect } from 'react-redux'
import store from '../store';
class Messages{
    static getAll(){

        return fetch('http://localhost:3002/soully/posts')

        .then(response=> response.json()
        ) .then(json => {
            store.dispatch(fetchDataSuccess(json))
            console.log("in message class")
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