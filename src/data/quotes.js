import store from "../store";
import { fetchDataLoading, fetchDataSuccess } from "../actions";

class Quotes{
    static getAll(){
      
      return fetch('http://localhost:3002/soully/quotes')
        .then(response=> response.json()
        
        )
       
       
    }
}
export default Quotes;