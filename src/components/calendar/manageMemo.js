import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/manageMemo.css";
import AllMemos from "./allMemos";
import store from '../../store'
import OneMemo from "./oneMemo";
import Messages from "../../data/posts"
import { connect } from "react-redux";

class ManageMemo extends Component {
  a;
  constructor(props)
  {
    super(props);
    this.state = {
      day : "",
     
    }

}


  render() {
    const mood =this.props.mood.slice(-1)[0];

    const activities = this.props.activities.map((data)=>
    <li>
      {data}
    </li>) 
    const stories = this.props.stories.map((story) =>
      <li>{story}</li>
    )
    var lenght = 0;
    lenght = this.props.activities.length + this.props.mood.length + this.props.stories.length;
    console.log(store.getState().d)

    if(store.getState().dataReducer.loading === true){
      return(
        <div>Wait please</div>
      )
    }
    else
    {
    return (
      <div className="manageMemos">
         <div className="dayClicked"> {this.props.day} </div>
        { lenght === 0 &&(
             <div className="memoListEmpty">
             You have not share your day! Tell us about it!
           </div>
        )}
        {this.props.mood.length !== 0 && (
          <div>
        <h1>Your moods</h1>
        <h2>{mood}</h2>
        </div>
        )}
        {this.props.activities.length !==0 &&(
          <div>
        <h1>Your've been up to </h1>
        <ul>
          {activities}
        </ul>
        </div>
        )}
        {this.props.stories.length !== 0 && (
          <div>
        <h1>Your stories</h1>
        <ul>{stories}</ul>
        </div>
        )}
        {/* <OneMemo/> */}
        {/* {day && (
          <div className="memoOfTheDay">
            <div className="dayClicked"> {day} </div>
            {day === "All Memos" && <div> Click on a day to add a memo! </div>}
            {memos.length === 0 &&
              day !== "All Memos" && (
                <div className="memoListEmpty">
                  You have not share your day! Tell us about it!
                </div>
              )}
            {memos.length !== 0 && (
              <div className="memoListOfTheDay">
                <AllMemos memos={memos} day={day} />
              </div>
            )}
          </div>
        )} */}
      </div>
    );
      }
  }
}
const mapStateToProps = state => {
    var stor = [];

    return {
      memos: stor,
      day: state.currentday.day,
      mood:state.dataReducer.mood,
      activities: state.dataReducer.activity,
      stories: state.dataReducer.story,
      n: state.dataReducer.postsPersonal
    };
  };

export default connect(mapStateToProps)(ManageMemo)
