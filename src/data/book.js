import {DataLoaded, DataLoading} from '../actions'

import store from '../store';
class Books{
    static getAll(){
        store.dispatch(DataLoading());
       
        return fetch('http://localhost:3002/soully/books')
        .then(response=> response.json()
        ).then(json => {
            store.dispatch(DataLoaded())
           
            return json;
        })
    }

}
export default Books;