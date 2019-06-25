import React from 'react';
import Check from '../mood-group/checkbox';
import imgL from '../../assets/img/angle-left.png'
import imgH from '../../assets/img/angle-right.png'
import { connect } from 'react-redux'

import water from '../../assets/img/water_black.png'
import sport from '../../assets/img/tennis_black.png'
import lazy from '../../assets/img/sleep_black.png'
import walking from '../../assets/img/walking_black.png'
import hiking from '../../assets/img/hiking_black.png'
import running from '../../assets/img/running_black.png'
import date from '../../assets/img/date_black.png'
import birthday from '../../assets/img/cake_black.png'
import party from '../../assets/img/party_black.png'
import charity from '../../assets/img/charity_black.png'

import waterClicked from '../../assets/img/water_green.png'
import sportClicked from '../../assets/img/tennis_green.png'
import lazyClicked from '../../assets/img/sleep_green.png'
import walkingClicked from '../../assets/img/walking_green.png'
import hikingClicked from '../../assets/img/hiking_green.png'
import runningClicked from '../../assets/img/running_green.png'
import dateClicked from '../../assets/img/date_green.png'
import birthdayClicked from '../../assets/img/cake_green.png'
import partyClicked from '../../assets/img/party_green.png'
import charityClicked from '../../assets/img/charity_green.png'

class Group extends React.Component {
   arr;
   render() {
    return (
      <div>
      <form>
       <ul className="block">
        <Check mood="water"  img={water} imgClicked={waterClicked} checked={this.props.water} type="checkbox"  onClick={this.props.onActivitySelect}  />
        <Check mood="sport" img={sport} imgClicked={sportClicked} checked={this.props.sport}  type="checkbox" onClick={this.props.onActivitySelect}/>
        <Check mood="lazy"   img={lazy} imgClicked={lazyClicked} checked={this.props.lazy} type="checkbox" onClick={this.props.onActivitySelect} />
        <Check mood="walking"  img={walking} imgClicked={walkingClicked} checked={this.props.walking} type="checkbox"  onClick={this.props.onActivitySelect}  />
        <Check mood="hiking" img={hiking} imgClicked={hikingClicked} checked={this.props.hiking}  type="checkbox" onClick={this.props.onActivitySelect}/>
        <Check mood="running"   img={running} imgClicked={runningClicked} checked={this.props.running} type="checkbox" onClick={this.props.onActivitySelect} />
        <Check mood="date"  img={date} imgClicked={dateClicked} checked={this.props.date} type="checkbox"  onClick={this.props.onActivitySelect}  />
        <Check mood="birthday" img={birthday} imgClicked={birthdayClicked} checked={this.props.birthday}  type="checkbox" onClick={this.props.onActivitySelect}/>
        <Check mood="party"   img={party} imgClicked={partyClicked} checked={this.props.party} type="checkbox" onClick={this.props.onActivitySelect} />
        <Check mood="charity"   img={charity} imgClicked={charityClicked} checked={this.props.charity} type="checkbox" onClick={this.props.onActivitySelect} />
       </ul> 
     </form>
     
     </div>
    );
  }
}
 
const mapStateToProps = (state) => {  
  console.log ("state -", state.changeActivity);
 return {
  water: state.changeActivity["water"],
  sport: state.changeActivity["sport"],
  lazy: state.changeActivity["lazy"],
  walking: state.changeActivity["walking"],
  hiking: state.changeActivity["hiking"],
  running : state.changeActivity["running"],
  date: state.changeActivity["date"],
  birthday: state.changeActivity["birthday"],
  party: state.changeActivity["party"],
  charity: state.changeActivity["charity"]
 
 }
}

const mapDispatchToProps = (dispatch) => {

  return {
    // explicitly forwarding arguments
    
    onActivitySelect: (event) => {
      console.log("event.target.value: ", event.target.value, "event.target.checked: ",event.target.checked);
      event.preventDefault();
      dispatch({type: 'SELECT_ACTIVITY', name: event.target.value, checked : event.target.checked })},
    
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);