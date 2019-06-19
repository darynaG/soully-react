class Books{
    static getAll(){
        return fetch('http://localhost:3002/soully/books')
        .then(response=> response.json()
        )
    }

}
export default Books;