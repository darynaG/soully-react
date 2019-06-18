class Do{
    static getAll(){
        return fetch("https://c6e44c6c-b331-4377-bed7-d91b89e64f89.mock.pstmn.io/do")
        .then(response=>response.json())
    }

}
export default Do;