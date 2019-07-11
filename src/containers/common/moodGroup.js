import React from 'react';
import Mood from '../../components/moodGroup/mood';

import sad from '../../assets/img/sad.svg'
import good from '../../assets/img/good.svg'
import wow from '../../assets/img/wow.svg'
import wtf from '../../assets/img/wtf.svg'
import excited from '../../assets/img/excited.svg'
import happy from '../../assets/img/happy.svg'

import sadClicked from '../../assets/img/sad_green.svg'
import goodClicked from '../../assets/img/good_green.svg'
import wowClicked from '../../assets/img/wow_green.svg'
import wtfClicked from '../../assets/img/wtf_green.svg'
import excitedClicked from '../../assets/img/excited_green.svg'
import happyClicked from '../../assets/img/happy_green.svg'


import { connect } from 'react-redux'


class MoodGroup extends React.Component {
  constructor(props){
    super(props);
    if(this.props.isGuest===true) {
      this.props.handleClick();
      this.props.initQuotes();
    }
    
  }
  render() {
    return (
      <form>
        <h3 class="h3-label">What is your mood?</h3>
        <ul className="block">
          <Mood mood="sad" img={sad} imgClicked={sadClicked} type="radio" selected={this.props.mood} onClick={this.props.onMoodChange} />
          <Mood mood="wow" img={wow} imgClicked={wowClicked} type="radio" selected={this.props.mood} onClick={this.props.onMoodChange} />
          <Mood mood="wtf" img={wtf} imgClicked={wtfClicked} type="radio" selected={this.props.mood} onClick={this.props.onMoodChange} />
          <Mood mood="good" img={good} imgClicked={goodClicked} type="radio" selected={this.props.mood} onClick={this.props.onMoodChange} />
          <Mood mood="excited" img={excited} imgClicked={excitedClicked} type="radio" selected={this.props.mood} onClick={this.props.onMoodChange} />
          <Mood mood="happy" img={happy} imgClicked={happyClicked} type="radio" selected={this.props.mood} onClick={this.props.onMoodChange} />
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mood: state.changeMood.mood
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMoodChange: (event) => {
      event.preventDefault();
      dispatch({ type: 'CHOOSE_MOOD', mood: event.target.value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodGroup);
