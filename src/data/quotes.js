import store from "../store";
import { fetchDataLoading, fetchQuoteSuccess,fetchDataFailure } from "../actions/data.actions";

class Quotes{
    static getAll(){
      store.dispatch(fetchDataLoading());
      return fetch('http://localhost:3002/soully/quotes')

      .then(response=> response.json()
      ) .then(json => {
          store.dispatch(fetchQuoteSuccess(json))
         
          //return json;
      }).catch(error => store.dispatch(fetchDataFailure(error)));
       
       
    }
}
export default Quotes;