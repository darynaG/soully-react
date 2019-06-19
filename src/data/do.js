class Do{
    static getAll(){
        return fetch('http://localhost:3002/soully/do')
        .then(response=>response.json())
    }

}
export default Do;