import {fetchDataSuccess,fetchDataFailure, fetchDataLoading} from '../actions'
import store from '../store';
class Do{
    static getAll(){
        store.dispatch(fetchDataLoading());
        return fetch('http://localhost:3002/soully/do')

        .then(response=> response.json()
        ) .then(json => {
            store.dispatch(fetchDataSuccess(json))
           
            return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
    }

}
export default Do;