class Quotes{
    static getAll(){
      return fetch('https://c6e44c6c-b331-4377-bed7-d91b89e64f89.mock.pstmn.io/quotes')
        .then(response=> response.json()
        )//.then((data)=>{return data.PromiseValue})
       
       
    }
}
export default Quotes;