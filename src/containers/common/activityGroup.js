import React from 'react';
import Check from '../../components/moodGroup/checkbox';

import { connect } from 'react-redux'

import water from '../../assets/img/water.svg'
import sport from '../../assets/img/sport.svg'
import lazy from '../../assets/img/lazy.svg'
import walking from '../../assets/img/walking.svg'
import hiking from '../../assets/img/hiking.svg'
import running from '../../assets/img/running.svg'
import date from '../../assets/img/date.svg'
import birthday from '../../assets/img/cake.svg'
import party from '../../assets/img/party.svg'
import charity from '../../assets/img/charity.svg'

import waterClicked from '../../assets/img/water_green.svg'
import sportClicked from '../../assets/img/sport_green.svg'
import lazyClicked from '../../assets/img/lazy_green.svg'
import walkingClicked from '../../assets/img/walking_green.svg'
import hikingClicked from '../../assets/img/hiking_green.svg'
import runningClicked from '../../assets/img/running_green.svg'
import dateClicked from '../../assets/img/date_green.svg'
import birthdayClicked from '../../assets/img/cake_green.svg'
import partyClicked from '../../assets/img/party_green.svg'
import charityClicked from '../../assets/img/charity_green.svg'

class Group extends React.Component {
  arr;
  render() {
    return (


      <form>
        <h3 class="h3-label">What you`ve been up to?</h3>
        <ul className="block">
          <Check mood="water" img={water} imgClicked={waterClicked} checked={this.props.water} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="sport" img={sport} imgClicked={sportClicked} checked={this.props.sport} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="lazy" img={lazy} imgClicked={lazyClicked} checked={this.props.lazy} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="walking" img={walking} imgClicked={walkingClicked} checked={this.props.walking} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="hiking" img={hiking} imgClicked={hikingClicked} checked={this.props.hiking} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="running" img={running} imgClicked={runningClicked} checked={this.props.running} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="date" img={date} imgClicked={dateClicked} checked={this.props.date} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="birthday" img={birthday} imgClicked={birthdayClicked} checked={this.props.birthday} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="party" img={party} imgClicked={partyClicked} checked={this.props.party} type="checkbox" onClick={this.props.onActivitySelect} />
          <Check mood="charity" img={charity} imgClicked={charityClicked} checked={this.props.charity} type="checkbox" onClick={this.props.onActivitySelect} />
        </ul>
      </form>

    );
  }
}

const mapStateToProps = (state) => {
  console.log("state -", state.changeActivity);
  return {
    water: state.changeActivity["water"],
    sport: state.changeActivity["sport"],
    lazy: state.changeActivity["lazy"],
    walking: state.changeActivity["walking"],
    hiking: state.changeActivity["hiking"],
    running: state.changeActivity["running"],
    date: state.changeActivity["date"],
    birthday: state.changeActivity["birthday"],
    party: state.changeActivity["party"],
    charity: state.changeActivity["charity"]

  }
}

const mapDispatchToProps = (dispatch) => {

  return {

    onActivitySelect: (event) => {
      console.log("event.target.value: ", event.target.value, "event.target.checked: ", event.target.checked);
      event.preventDefault();
      dispatch({ type: 'SELECT_ACTIVITY', name: event.target.value, checked: event.target.checked })
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);