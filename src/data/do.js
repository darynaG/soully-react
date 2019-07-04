import {DataLoaded, DataLoading} from '../actions/data.actions'

import store from '../store';
class Do{
    static getAll(){
        store.dispatch(DataLoading());
       
        return fetch('http://localhost:3002/soully/do')
        .then(response=> response.json()
        ).then(json => {
            store.dispatch(DataLoaded())
           
            return json;
        })
    }

}
export default Do;