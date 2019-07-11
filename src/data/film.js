import {DataLoaded, DataLoading} from '../actions/data.actions'
import {dbConstants} from '../constants'
import store from '../store';
class Books{
    static getAll(mood){
        store.dispatch(DataLoading());
        return fetch(dbConstants.SERVER_ADDRESS +'/api/content/film/'+mood)
        .then(response=> response.json()
        ).then(json => {
            store.dispatch(DataLoaded())
           
            return json;
        })
    }

}
export default Books;