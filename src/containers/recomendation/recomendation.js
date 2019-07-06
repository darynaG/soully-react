import React from 'react';
import { connect } from 'react-redux'
import Spinner from 'react-spinner-material';

import {
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import store from '../../store';

import Books from '../../data/book.js'
import Films from '../../data/film.js'
import Actions from '../../data/do.js'

import '../../css/swiper.css';
import '../../css/responsibleRecomendation.css';

import { DataLoaded, DataLoading } from '../../actions/data.actions'


library.add(
    faAngleLeft,
    faAngleRight
)
class Recomendation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            contents: [],
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    componentDidMount() {
        let content = [];
        switch (this.props.category) {
            case ("books"):
                var books = Books.getAll().then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        if (this.props.mood == data[i].mood)
                            content.push(data[i]);
                    }
                })
                    .then(() => {
                        this.setState({
                            contents: content
                        });
                    })
                break;
            case ("films"):
                var films = Films.getAll().then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        if (this.props.mood == data[i].mood)
                            content.push(data[i]);
                    }
                })
                    .then(() => {
                        this.setState({
                            contents: content
                        });
                    })
                break;
            case ("activities"):
                var activities = Actions.getAll().then((data) => {
                    for (let i = 0; i < data.length; i++) {
                        if (this.props.mood == data[i].mood)
                            content.push(data[i])
                    }
                })
                    .then(() => {
                        this.setState({
                            contents: content
                        });
                    })
                break;

        }
    }
    prevSlide() {
        const lastIndex = this.state.contents.length - 1;
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
        this.setState({
            currentIndex: index
        })
    }

    nextSlide() {
        const lastIndex = this.state.contents.length - 1;
        const resetIndex = this.state.currentIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentIndex + 1;
        this.setState({
            currentIndex: index
        });
    }


    render() {
        const index = this.state.currentIndex;
        let first = this.state.contents.slice(index, index + 1);
        if (store.getState().loadingReducer.data_loading !== 0) {
            return (
                <div className={this.props.classL}>
                    <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
                </div>
            )
        } else
            return (
                <div className="container">
                    <FontAwesomeIcon icon={faAngleLeft} size="3x" onClick={this.prevSlide} />
                    {first.map((contents) =>
                        <div className="content">
                            <img src={contents.image} alt="" />
                            <h2 >{contents.title}</h2>
                            <p >{contents.description}</p>
                            <i className="tag">{contents.tag}</i>
                        </div>
                    )}
                    <FontAwesomeIcon icon={faAngleRight} size="3x" onClick={this.nextSlide} />
                </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        data_loading: state.loadingReducer,
    }
}
const mapDispatchToProps = {
    DataLoading,
    DataLoaded
}


export default connect(mapStateToProps, mapDispatchToProps)(Recomendation);




