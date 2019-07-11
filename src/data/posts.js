import {fetchDataSuccess,fetchDataFailure, fetchDataLoading,fetchDataSuccessUsers, fetchDataSuccessId, fetchDataSuccessMood, fetchDataSuccessStory, fetchDataSuccessActivity} from '../actions/data.actions'
import { fetchDataSuccessDay} from '../actions/day.action'
import store from '../store';
import moment from 'moment'
import {dbConstants} from '../constants'
import { authHeader } from '../helpers';
import React from 'react'
import { Redirect } from 'react-router-dom'

class Messages{
    static getAllGuest(){
        store.dispatch(fetchDataLoading());
        return fetch(dbConstants.SERVER_ADDRESS +'/api/story')

        .then(response=> response.json()
        ).then(json => {
            store.dispatch(fetchDataSuccess(json.stories))
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }

    // static getAllByUsername(account_id){
    //     store.dispatch(fetchDataLoading());
    //     return fetch('http://127.0.0.1:5000/api/account/'+account_id)
    //     .then(response=> response.json()
    //     ).then(json => {
    //         store.dispatch(fetchDataSuccessUsers(json.stories))
    //        return json;
    //     }).catch(error => store.dispatch(fetchDataFailure(error)));

    // }
    static getAll(){
        store.dispatch(fetchDataLoading());

        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        return fetch(dbConstants.SERVER_ADDRESS +'/api/story', requestOptions)
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

    static getByDayAndUsername(user_id, date){ 
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        store.dispatch(fetchDataLoading());
        //console.log("vhgfvjvjv,kv",'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date )
        return fetch(dbConstants.SERVER_ADDRESS +'/api/accounts/current/day/'+date,requestOptions)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessId(json)) 
        return json;
       }).catch(error => store.dispatch(fetchDataFailure(error)));
     }
     static getByUsername(user_id, date){ 
        
        var str =''
        if(date === "") 
        str = dbConstants.SERVER_ADDRESS +'/api/accounts/current/day/'+moment().format("YYYY-MM-DD")
        else str = dbConstants.SERVER_ADDRESS +'/api/accounts/current/day/'+date
        return fetch(str)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessId(json)) 
        return json;
       })
      .catch(error => store.dispatch(fetchDataFailure(error)));
    }
    static getByDayAndUsername(user_id, date){ 
        //store.dispatch(fetchDataLoading());
        var str =''
        if(date === undefined) 
        str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")
        else str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date
        console.log(str)
        return fetch(str)

        .then(response=> response.json()
       ) .then(json => {
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!",json)
            store.dispatch(fetchDataSuccessId(json))
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!",json)

        return json;
       }).catch(error => store.dispatch(fetchDataFailure(error)));
         

     }
     static getDayMood(user_id,date){
        store.dispatch(fetchDataLoading())
        var str =''
        if(date === undefined) 
        str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")+'/mood'
        else str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date+'/mood'
        return fetch(str)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessMood(json)) 
        return json;
       })
      .catch(error => store.dispatch(fetchDataFailure(error)));
     }


     static getDayActivity(user_id,date){
        store.dispatch(fetchDataLoading())
        var str =''
        if(date === undefined) 
        str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")+'/activity'
        else str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date+'/activity'
        return fetch(str)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessActivity(json)) 
        return json;
       })
      .catch(error => store.dispatch(fetchDataFailure(error)));
     }


     static getDayStory(user_id,date){
        store.dispatch(fetchDataLoading())
        var str =''
        if(date === undefined) 
        str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")+'/story'
        else str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date+'/story'
        return fetch(str)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessStory(json)) 
        return json;
       })
      .catch(error => store.dispatch(fetchDataFailure(error)));
     }
        
   
    static newPost = post =>{

        const options={
            method:"POST",
            headers:authHeader(),
            mode: 'cors',
            body:post
        }
        return fetch(dbConstants.SERVER_ADDRESS +'/api/story',options)//add post method
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


        //let headers = new Headers();


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
        return fetch(dbConstants.SERVER_ADDRESS +'/api/story/0',options)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
}


export default Messages;