import React, { PureComponent } from 'react';
import Messages from '../../data/posts.js';
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faQuoteLeft,
    faQuoteRight

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faQuoteLeft,
    faQuoteRight
)


class StoryBoard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { sad: [], wow: [], wtf: [], excited: [], good: [], happy: [], current: [] };

    }

    componentDidMount() {
        console.log("did mount", this.props.mood);
        let c = [];
        let sad = [],
            wow = [],
            wtf = [],
            excited = [],
            good = [],
            happy = [];
        const allstories = [];
        const storiesByMood = {};
        Messages.getAll()
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    allstories.push(data[i]);
                    if (!storiesByMood[data[i].mood]) {
                        storiesByMood[data[i].mood] = [];
                    }
                    storiesByMood[data[i].mood].push(data[i]);
                }
                // { "sad": [...], "happy": [...]}
                storiesByMood.current = storiesByMood[this.props.mood];
            }).then(
                this.setState(storiesByMood))
    }

    componentDidUpdate() {

        let c = [];
        switch (this.props.mood) {
            case "sad":

                c = this.state.sad;
                break;
            case "wow":

                c = this.state.wow;
                break;
            case "wtf":

                c = this.state.wtf;
                break;
            case "excited":

                c = this.state.excited;
                break;
            case "good":

                c = this.state.good;
                break;
            case "happy":

                c = this.state.happy;
        }

        this.setState({ current: c })

    }


    render() {

        return ( <
            React.Fragment >
            <
            h1 className = "centered-text"
            style = {
                { marginTop: '10px' } } > Stories < /h1> <
            div className = "storyboard" >

            <
            div className = "story_column left" > {
                this.state.current.slice(0, 2).map((data) => {

                    return ( <
                        div className = "story" >

                        <
                        div className = "story_head" >

                        <
                        div > { data.username } <
                        /div> <
                        div > { data.mood } <
                        /div> <
                        /div>


                        <
                        article className = "story_text" > < FontAwesomeIcon icon = { faQuoteLeft }
                        size = "1x" / > { data.text }

                        <
                        /article>


                        <
                        /div>

                    )

                })
            }

            <
            /div>

            <
            div className = "story_column right" >

            {
                this.state.current.slice(2, 3).map((data) => {
                    return ( <
                        div className = "story" >

                        <
                        div className = "story_head" >

                        <
                        div > { data.username } <
                        /div> <
                        div > { data.mood } <
                        /div> <
                        /div>


                        <
                        article className = "story_text" > < FontAwesomeIcon icon = { faQuoteLeft }
                        size = "1x" / > { data.text }


                        <
                        /article> 

                        <
                        /div>
                    )
                })
            } <
            /div> <
            /div> <
            /React.Fragment>
        );
    }
}
export default StoryBoard;