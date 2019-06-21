class Quotes{
    static getAll(){
      return fetch('http://localhost:3002/soully/quotes')
        .then(response=> response.json()
        )//.then((data)=>{return data.PromiseValue})
       
       
    }
}
export default Quotes;