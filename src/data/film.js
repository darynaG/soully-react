import {DataLoaded, DataLoading} from '../actions/data.actions'

import store from '../store';
class Films{
    static getAll(){
        store.dispatch(DataLoading());
       
        return fetch('http://localhost:3002/soully/films')
        .then(response=> response.json()
        ).then(json => {
            store.dispatch(DataLoaded())
           
            return json;
        })
    }

}
export default Films;