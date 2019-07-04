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
        let sad = [], wow = [], wtf = [], excited = [], good = [], happy = [];
        let allstories = [];
        Messages.getAll().then((data) => {
            for (let i = 0; i < data.length; i++) {
                allstories.push(data[i]);
                switch (data[i].mood) {
                    case "sad":
                        sad.push(data[i]);
                        break;
                    case "wow":
                        wow.push(data[i]);
                        break;
                    case "wtf":
                        wtf.push(data[i]);
                        break;
                    case "excited":
                        excited.push(data[i]);
                        break;
                    case "good":
                        good.push(data[i]);
                        break;
                    case "happy":
                        happy.push(data[i]);
                        break;
                }
            }
            switch (this.props.mood) {
                case "sad":
                    c = sad;
                    break;
                case "wow":
                    c = wow;
                    break;
                case "wtf":
                    c = wtf;
                    break;
                case "excited":
                    c = excited;
                    break;
                case "good":
                    c = good;
                    break;
                case "happy":
                    c = happy;
            }
        }).then(
            this.setState({ sad: sad, wow: wow, wtf: wtf, excited: excited, good: good, happy: happy, current: c }))
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
        return (
            <React.Fragment>
                <div className="storyboard">

                    <div className="story_column left">
                        {
                            this.state.current.slice(0, 2).map((data) => {

                                return (
                                    <div className="story">

                                        <article className="story_text"> <FontAwesomeIcon icon={faQuoteLeft} size="1x" />
                                            {data.text}
                                            <FontAwesomeIcon icon={faQuoteRight} size="1x" />

                                        </article>
                                    </div>
                                )

                            })
                        }
                    </div>

                    <div className="story_column right">

                        {
                            this.state.current.slice(2, 3).map((data) => {
                                return (
                                    <div className="story">

                                        <article className="story_text"> <FontAwesomeIcon icon={faQuoteLeft} size="1x" />
                                            {data.text}
                                            <FontAwesomeIcon icon={faQuoteRight} size="1x" />
                                        </article>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default StoryBoard;