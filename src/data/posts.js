import {fetchDataSuccess,fetchDataFailure, fetchDataLoading, fetchDataSuccessId, fetchDataSuccessMood, fetchDataSuccessStory, fetchDataSuccessActivity} from '../actions/data.actions'

import store from '../store';
import moment from 'moment'
import {dbConstants} from '../constants'
import { authHeader } from '../helpers';

class Messages{
    static getAllGuest(){
        store.dispatch(fetchDataLoading());
        return fetch(dbConstants.SERVER_ADDRESS +'/api/story')

        .then(response=> response.json()
        ).then(json => {
            store.dispatch(fetchDataSuccess(json.stories))
        }).catch(error => store.dispatch(fetchDataFailure(error)));
    }
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
        ).then(json => {
            store.dispatch(fetchDataSuccess(json.stories))
        })
        .catch(error => {
            store.dispatch(fetchDataFailure(error));
        });
    }

    static getByDayAndUsername(user_id, date){ 
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        store.dispatch(fetchDataLoading());
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
        str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")
        else str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+date
        return fetch(str)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessId(json)) 
        return json;
       })
      .catch(error => store.dispatch(fetchDataFailure(error)));
    }
    
     static getDayMood(user_id,date){
        store.dispatch(fetchDataLoading())
        var str =''
        if(date === undefined) 
        str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")+'/mood'
        else str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+date+'/mood'
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
        str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")+'/activity'
        else str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+date+'/activity'
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
        str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")+'/story'
        else str = dbConstants.SERVER_ADDRESS +'/api/accounts/'+user_id+'/day/'+date+'/story'
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
        const options={
            method:"POST",
            headers:authHeader(),
            mode: 'cors',
            body:data
        }
        return fetch(dbConstants.SERVER_ADDRESS +'/api/story/1',options)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
static unlikePost = data=>{
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