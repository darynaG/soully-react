import React from 'react'
import Stories from '../../data/posts'
import { updateLocale } from 'moment';
import { connect } from "react-redux";

class Test extends React.Component{
    constructor(props){
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.getUsers2 = this.getUsers2.bind(this);

    }
    user = {}
    getUsers() {
        var  mood_stories = [];
       return  Stories.getAll()
         .then((data) => {
            for(let i = 0; i < data.users.length; i++) {
               // console.log('i',data.users[i])
                mood_stories.push(data['users'][i]);  

            }
        }).then((data) =>{
            //console.log("mood_st 2",mood_stories[0]["name"])
            this.user=mood_stories[0];
            console.log("user",this.user['name'])
            return this.user['name'];
            

        })
     
       
    }
    getUsers2() {
       // var a = this.getUsers();
       //var us2 = this.getUsers().
       var a = this.getUsers()
       .then(() => {return});
       console.log("promisw", a)
        console.log("user 2",a['PromiseValue'])
       
    }

    
    render(){
        var arr = [1,2,3]
        const activities = this.props.users;
        const list=activities.map((activiti) => 
         <li key={activiti.name}> {activiti['name']} </li>
         );


        return(
        
            <div>
           <ul>{list}</ul>
                <button style={{"margin-top":"500px"}}onClick={this.getUsers2}>Click</button>
            </div>
        )
    }

}
const mapStateToProps = state =>{
   // const {users} =  state['dataReducer'];
   console.log("fghfjug",state.dataReducer.users)
    
    return({
        users: state.dataReducer.users
    })
}
export default (connect)(mapStateToProps)(Test);