import React from 'react'
import MoodGroup from '../mood-group/test'
import StoryBoard from '../guest-page/storyBord';
import Quote from '../guest-page/quote'
import '../../css/new-mood-page.css';
import '../../css/story-input.css'
class Guest extends React.Component{
    render() {
        return (
        <div>
            <MoodGroup />
            <div className="container add-margin">
                <Quote mood="sad" />
                <StoryBoard mood="sad" visible='true'/>
            </div>
        </div>
        )
    }

}
export default Guest;