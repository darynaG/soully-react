class Messages{
    static all(){
        fetch('https://ecab8c04-5b5f-42a0-a2ae-14d270676238.mock.pstmn.io/posts')
        .then((response)=>{
            return response.json();
        }
        )}
}
export default Messages;