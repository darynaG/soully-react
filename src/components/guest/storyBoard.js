import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
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
    render() {
        let data = this.props.posts;
        const current = [];
        for (let i = 0; i < data.length && current.length < 3; i++) {
            current.push(data[i]);
        }
        return (
            <React.Fragment>
                <div className="storyboard">
                    <div className="story_column left">
                        {
                            current.slice(0, 2).map((data) => {
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

                    {<div className="story_column right">
                        {
                            current.slice(2, 3).map((data) => {
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
                    </div>}
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {


    return {
        mood: state.changeMood.mood,
        posts: state.dataReducer.posts
    };
}
export default connect(mapStateToProps)(StoryBoard);