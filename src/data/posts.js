import {fetchDataSuccess,fetchDataFailure, fetchDataLoading,fetchDataSuccessUsers, fetchDataSuccessId }from '../actions/data.actions'
import { fetchDataSuccessDay} from '../actions/day.action'
import store from '../store';
import moment from 'moment'

class Messages{
    static getAllGuest(){
        store.dispatch(fetchDataLoading());
        return fetch('http://127.0.0.1:5000/api/story')//to do 6*3
        .then(response=> response.json()
        ).then(json => {
            store.dispatch(fetchDataSuccess(json.stories))
            //store.dispatch(fetchDataSuccessUsers(json.users))
          
           // return json;
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
        return fetch('http://127.0.0.1:5000/api/story')//to do pagination if possible
        .then(response=> response.json()
        ).then(json => {
          
            store.dispatch(fetchDataSuccessUsers(json.stories))
          
           //return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static getByDayAndUsername(user_id, date){ 
        store.dispatch(fetchDataLoading());
        console.log("vhgfvjvjv,kv",'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date )
        return fetch('http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessId(json)) 
        return json;
       }).catch(error => store.dispatch(fetchDataFailure(error)));
     }
     static getByUsername(user_id, date){ 
        
        var str =''
        if(date === "") 
        str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+moment().format("YYYY-MM-DD")
        else str = 'http://127.0.0.1:5000/api/accounts/'+user_id+'/day/'+date
        return fetch(str)
        .then(response=> response.json()
       ).then(json => {
            store.dispatch(fetchDataSuccessDay(json)) 
        return json;
       })
      .catch(error => store.dispatch(fetchDataFailure(error)));
         

     }

        
    static newPost = post=>{
        let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  //headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'HEAD');
        const options={
            method:"POST",
            headers:headers,
            mode: 'cors',
            body:post
        }
        return fetch('http://ec2-54-236-86-235.compute-1.amazonaws.com:5000/api/story',options)//add post method
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
}


export default Messages;