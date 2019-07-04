import {fetchDataSuccess,fetchDataFailure, fetchDataLoading} from '../actions'

import store from '../store';
import { fetchDataSuccessUsers } from '../actions/actions';
class Messages{
    static getAllGuest(){
        store.dispatch(fetchDataLoading());
        return fetch('http://127.0.0.1:5000/api/users')

        .then(response=> response.json()
        ) .then(json => {
          
            store.dispatch(fetchDataSuccessUsers(json.users))
          
           // return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static getAll(){
        store.dispatch(fetchDataLoading());
        return fetch('http://127.0.0.1:5000/api/users')

        .then(response=> response.json()
        ) .then(json => {
          
            store.dispatch(fetchDataSuccessUsers(json))
          
           // return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static newPost = post=>{
        let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'HEAD');
        const options={
            method:"POST",
            headers:headers,
            mode: 'cors',
            body:post
        }
        return fetch('http://127.0.0.1:5000/api/users',options)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
}


export default Messages;