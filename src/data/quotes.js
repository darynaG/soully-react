import store from "../store";
import { fetchDataLoading, fetchDataSuccess,fetchDataFailure } from "../actions";

class Quotes{
    static getAll(){
      store.dispatch(fetchDataLoading());
      return fetch('http://localhost:3002/soully/quotes')

      .then(response=> response.json()
      ) .then(json => {
          store.dispatch(fetchDataSuccess(json))
         
          return json;
      }).catch(error => store.dispatch(fetchDataFailure(error)));
       
       
    }
}
export default Quotes;