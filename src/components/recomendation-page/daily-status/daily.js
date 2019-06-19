import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Messages from '../../../data/posts.js'
import {
    faQuoteLeft,
    faQuoteRight,
    faSadTear,
    faFrownOpen,
    faMehRollingEyes,
    faLaughWink,
    faLaughBeam,
    faLaughSquint,
    faGlassWhiskey,
    faTableTennis,
    faCouch,
    faWalking,
    faRunning,
    faHiking,
    faHeart,
    faBirthdayCake,
    faGlassCheers,
    faHandHoldingHeart

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faQuoteLeft,
    faQuoteRight,
    faSadTear,
    faFrownOpen,
    faMehRollingEyes,
    faLaughWink,
    faLaughBeam,
    faLaughSquint,
    faGlassWhiskey,
    faTableTennis,
    faCouch,
    faWalking,
    faRunning,
    faHiking,
    faHeart,
    faBirthdayCake,
    faGlassCheers,
    faHandHoldingHeart
)
class DailyMood extends React.Component{
    constructor(props){
        super(props);
        var MapMood=new Map();
        MapMood.set("sad",faSadTear);
        MapMood.set("wow",faFrownOpen);
        MapMood.set("excited",faLaughWink);
        MapMood.set("good",faLaughBeam);
        MapMood.set("happy",faLaughSquint);

        var MapActions=new Map();
        MapActions.set("Water",faGlassWhiskey);
        MapActions.set("Sport",faTableTennis);
        MapActions.set("Lazy day",faCouch);
        MapActions.set("Walking",faWalking);
        MapActions.set("Running",faRunning);
        MapActions.set("Hiking",faHiking);
        MapActions.set("Date",faHeart);
        MapActions.set("Birthday",faBirthdayCake);
        MapActions.set("Party",faGlassCheers);
        MapActions.set("Charity",faHandHoldingHeart);
        var actions_img=[];

        for(let i=0;i<this.props.actions.length;i++){
            actions_img.push(MapActions.get(this.props.actions[i]));
        }
        this.state={ 
            stories:[],
            mood_img:MapMood.get(this.props.mood),
            act_img:actions_img
        }

    }
    componentDidMount(){
        var  mood_stories = [];
        var a = Messages.getAll().then((data)=>{
            for(let i=0;i<data.length;i++){
                if(this.props.username == data[i].username && this.props.date == data[i].date)
                mood_stories.push(data[i]);
            }
        })
        .then(() =>{
            this.setState({
                stories:mood_stories
            })
        })
    }

    render(){
        const actions_=this.state.act_img.map((action)=>
        < li className="flex-item"> <FontAwesomeIcon icon={action} size="3x"> </FontAwesomeIcon>
        </li>
        );
        const stor=this.state.stories.map((story)=>
        <ol className="story">
            <FontAwesomeIcon icon={faQuoteLeft}> </FontAwesomeIcon>
        <article className="story_text">
        {story.text}
        </article>
        <FontAwesomeIcon icon={faQuoteRight}>
            </FontAwesomeIcon></ol>);
            const a=faQuoteLeft;
        return(
            <div className = "daily-log">
                <h1>Daily mood</h1>
                <div className = "mood">
                <h1> Your mood is</h1>
                <FontAwesomeIcon icon={this.state.mood_img} size="5x"></FontAwesomeIcon>
                </div>
                <div className = "action">
                    <h1>You've been up to</h1>
                    <ul  className = "block">
                    {actions_}
                    </ul>
                    </div>    
                 <div className = "stories">
                     <h3>Your story:</h3> 
                     <ul>{stor}</ul>
                     </div>
                     </div>
                );
        }
}
export default DailyMood;
