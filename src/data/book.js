import {DataLoaded, DataLoading} from '../actions/data.actions'

import store from '../store';
class Books{
    static getAll(mood){
        store.dispatch(DataLoading());
        return fetch('http://127.0.0.1:5000/api/content/book/'+mood)
        .then(response=> response.json()
        ).then(json => {
            store.dispatch(DataLoaded())
           
            return json;
        })
    }

}
export default Books;