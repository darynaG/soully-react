class Films{
    static getAll(){
        return fetch('http://localhost:3002/soully/films')
        .then(response=>response.json())
    }

}
export default Films;