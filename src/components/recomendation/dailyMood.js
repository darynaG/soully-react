import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import Messages from '../../data/posts.js'
import {
    faQuoteLeft,
    faQuoteRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lama from '../../assets/img/lama_green.png'
import '../../css/button.css'
import Spinner from 'react-spinner-material';
import store from '../../store';
import moment from 'moment'
library.add(
    faQuoteLeft,
    faQuoteRight
)

class DailyMood extends React.Component {

    componentDidMount() {
        var date = moment().format("YYYY-MM-DD");
        Messages.getDayMood(store.getState().authentication.user.user.id, date);
        Messages.getDayActivity(store.getState().authentication.user.user.id, date);
        Messages.getDayStory(store.getState().authentication.user.user.id, date);
    }

    render() {
        if (store.getState().dataReducer.loading === true) {

            return (
                <div className={this.props.classL}>
                    <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
                </div>
            )
        } else {
            const stor = this.props.stories.map((story) =>
                <ol className="story">
                    <FontAwesomeIcon icon={faQuoteLeft}> </FontAwesomeIcon>
                    <article className="story_text"> {story} </article>
                    <FontAwesomeIcon icon={faQuoteRight}>
                    </FontAwesomeIcon>
                </ol>);

            var a = this.props.activities;

            const activities = a.map((activiti) =>
                <li> {activiti} </li>
            );
            const mood = this.props.mood.slice(-1)[0]


            return (
                <div className="daily-log">
                    <h1> Daily mood </h1>
                    <div className="content">

                        <div className="leftside">
                            <div className="mood">
                                <h1> Your mood is </h1>
                                <h1> {mood} </h1>
                            </div>
                            <div className="action">
                                <h1>You've been up to</h1>
                                <ul className="block"> {activities} </ul>
                            </div>
                        </div>
                        <div className="stories">
                            <h2> Your stories: </h2>
                            <ul> {stor} </ul>
                        </div>
                    </div>
                    <div className="image">

                        <Link to="/home"><img src={lama} alt=''></img></Link>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.dataReducer.loading,
        postsPersonal: state.dataReducer.postsPersonal,
        mood: state.dataReducer.mood,
        activities: state.dataReducer.activity,
        stories: state.dataReducer.story
    };
}
export default connect(mapStateToProps)(DailyMood);


