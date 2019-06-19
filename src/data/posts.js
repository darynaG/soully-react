class Messages{
    static getAll(){
      return fetch('https://c6e44c6c-b331-4377-bed7-d91b89e64f89.mock.pstmn.io/posts')
        .then(response=> response.json()
        )//.then((data)=>{return data.PromiseValue})
       
       
    }
    static newPost=post=>{
        const options={
            method:"PUT",
            body:post,
            headers:new Headers({
                'Content-Type':'application/json'
            })
        }
        return fetch('https://c6e44c6c-b331-4377-bed7-d91b89e64f89.mock.pstmn.io/add-post',options)
        .then(res=>console.log(res.json()))

    }
}
export default Messages;