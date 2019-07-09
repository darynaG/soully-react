import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import Stories from '../../data/posts.js'
import {
    faQuoteLeft,
    faQuoteRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lama from '../../assets/img/lama_green.png'
import '../../css/button.css'
import Spinner from 'react-spinner-material';
import store from '../../store';
library.add(
    faQuoteLeft,
    faQuoteRight
)

class DailyMood extends React.Component {
    constructor(props) {
        super(props);
        Stories.getByDayAndUsername(this.props.user_id, this.props.date);
    }
  

    render () { 
        console.log("hjfjfyu",this.props.postsPersonal)
        if(store.getState().dataReducer.loading===true){
     
            return(
                <div className={this.props.classL}>
                    <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
                </div>
            )
        }else
        {
        let prep=this.props.postsPersonal;
        console.log('jkggikg',prep)
        
        let data=[];
        for(let i=prep.length-1;i>=0;i--){
            data.push(prep[i]);
        }
        const stor = data.map((story) =>
        <ol className="story">
            <FontAwesomeIcon icon={faQuoteLeft}> </FontAwesomeIcon>
            <article className="story_text"> {story.text} </article>
            <FontAwesomeIcon icon={faQuoteRight}>
            </FontAwesomeIcon>
        </ol> );

       var a =this.props.activity;
       

        var act = [];
        var arr = Object.keys(a);
        
        for (var i=0; i<arr.length; ++i)
          {
            if(this.props.activity[arr[i]] === true)
              {
                act.push(arr[i]);
              }
            //   console.log(arr[i]);
        
          }
          const activities = act.map((activiti) => 
         <li> {activiti} </li>
         );


        return( 
        <div className = "daily-log">
            <h1> Daily mood </h1>
            <div className="content">
       
            <div className="leftside">
            <div className = "mood">
                <h1> Your mood is </h1>
                <h1> {this.props.mood} </h1>
                </div>
                <div className = "action">
                    <h1>You've been up to</h1>
                    <ul  className = "block"> {activities} </ul>
                    </div>   
                    </div> 
                 <div className = "stories">
                     <h2> Your stories: </h2> 
                     <ul> {stor} </ul>
                     </div>
                      </div>
                      <div className="image">
                      
                      <Link to ="/home"><img src={lama} ></img></Link>
                      </div>
                     </div>
                );}
        }
}
const mapStateToProps= (state) => {
    return {
        loading:state.dataReducer.loading,
        postsPersonal: state.dataReducer.postsPersonal
    };
   }
export default connect(mapStateToProps)(DailyMood);


