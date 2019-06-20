class Messages{
    static getAll(){

        return fetch('http://localhost:3002/soully/posts')

        .then(response=> response.json()
        )   

    }
}
export default Messages;