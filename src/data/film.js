import {DataLoaded, DataLoading} from '../actions/data.actions'

import store from '../store';
class Films{
    static getAll(mood){
        store.dispatch(DataLoading());
        return fetch('http://localhost:5000/api/content/film/'+mood)
        .then(response=> response.json()
        ).then(json => {
            store.dispatch(DataLoaded())
           
            return json;
        })
    }

}
export default Films;