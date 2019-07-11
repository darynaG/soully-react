import {fetchDataSuccess,fetchDataFailure, fetchDataLoading,fetchDataSuccessUsers, fetchDataSuccessId } from '../actions/data.actions'
import store from '../store';
import { authHeader } from '../helpers';
import React from 'react'
import { Redirect } from 'react-router-dom'
class Messages{
    static getAllGuest(){
        store.dispatch(fetchDataLoading());
        return fetch('http://127.0.0.1:5000/api/story')
        .then(response=> response.json()
        ) .then(json => {
            store.dispatch(fetchDataSuccess(json.stories))
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static getAll(){
        store.dispatch(fetchDataLoading());
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        return fetch('http://127.0.0.1:5000/api/story', requestOptions)
        .then(res=>{
            if(!res.ok){
                throw new Error(res.status)
            }else {
                return res
            }
        })
        .then(response=> response.json()
        ) .then(json => {
            store.dispatch(fetchDataSuccess(json.stories))
        })
        .catch(error => {
            //return (<Redirect to='/home'></Redirect>);
            store.dispatch(fetchDataFailure(error));
        });
         

    }
    static getByDayAndUsername(){//to do 
        store.dispatch(fetchDataLoading());
        return fetch('http://127.0.0.1:5000/api/story')//to do current

        .then(response=> response.json()
        ) .then(json => {
          
            store.dispatch(fetchDataSuccessId(json.stories))
          
           // return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static newPost = post =>{

        const options={
            method:"POST",
            headers:authHeader(),
            mode: 'cors',
            body:post
        }
        return fetch('http://127.0.0.1:5000/api/story',options)//add post method
        .then(res=>res.json())
        .then(json => {
          
            store.dispatch(fetchDataSuccess(json.stories))
          
        })
        .catch(error=>console.log(error));
        
    }
    static likePost = data=>{
        // let headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');

//   headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');
//   headers.append('Access-Control-Allow-Credentials', 'true');

  //headers.append('GET', 'HEAD');
        const options={
            method:"POST",
            headers:authHeader(),
            mode: 'cors',
            body:data
        }
        return fetch('http://127.0.0.1:5000/api/story/1',options)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
static unlikePost = data=>{
//         let headers = new Headers();

//   headers.append('Content-Type', 'application/json');
//   headers.append('Accept', 'application/json');

//   //headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');
//   headers.append('Access-Control-Allow-Credentials', 'true');

//   headers.append('GET', 'POST', 'HEAD');
        const options={
            method:"POST",
            headers:authHeader(),
            mode: 'cors',
            body:data
        }
        return fetch('http://127.0.0.1:5000/api/story/0',options)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
}


export default Messages;