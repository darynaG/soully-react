import store from "../store";
import { fetchDataLoading, fetchQuoteSuccess,fetchDataFailure } from "../actions/data.actions";
import {dbConstants} from '../constants'
class Quotes{
    static getAll(){
      store.dispatch(fetchDataLoading());

      return fetch(dbConstants.SERVER_ADDRESS +'/api/quotes')

      .then(response=> response.json()
      ).then(json => {
          store.dispatch(fetchQuoteSuccess(json))
         
          //return json;
      }).catch(error => store.dispatch(fetchDataFailure(error)));
       
       
    }
}
export default Quotes;