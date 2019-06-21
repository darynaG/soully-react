import React from 'react';
import Mood from './mood';
import sad from '../../assets/img/sad_black.png'
import good from '../../assets/img/good_black.png'
import wow from '../../assets/img/wow_black.png'
import wtf from '../../assets/img/wtf_black.png'
import excited from '../../assets/img/excited_black.png'
import happy from '../../assets/img/happy_black.png'

import { connect } from 'react-redux'

class MoodGroup extends React.Component {
  
  render() {
    return (
      <div>
      <form>
       <ul className="block">
        <Mood mood="sad" img={sad} type="radio"  onClick={this.props.onMoodChange}/>
        <Mood mood="wow"  img={wow}  type="radio" onClick={this.props.onMoodChange}/>
         <Mood mood="wtf"   img={wtf}  type="radio" onClick={this.props.onMoodChange} />
         <Mood mood="good"  img={good}  type="radio" onClick={this.props.onMoodChange}/>
         <Mood mood="excited"  img={excited}  type="radio" onClick={this.props.onMoodChange}/>
       <Mood mood="happy"  img={happy}  type="radio" onClick={this.props.onMoodChange}/>
       </ul> 
     </form>
     <h1 style = {{marginTop:"200px"}}>You choose {this.props.mood}</h1>
     </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
    mood : state.changeMood.mood
 };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    
    onMoodChange: (event) => {
      event.preventDefault();
      dispatch({type: 'CHOOSE_MOOD', mood: event.target.value})}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodGroup);

/* class MoodGroup extends React.Component {

    constructor(props) {
        super(props);
    this.state={
        mood :  "sad"
    }
    this.onRadioChange = this.onRadioChange.bind(this);
}
  onRadioChange(event){
    this.setState(
        {
          mood : event.target.value
        }
        ) 
        console.log(this.state);
  }
    render() {
      
      return (
        <div>
       <form>
        <ul className="block">
         <Mood mood="sad" img={imgL} type="radio" onRadioChange={this.onRadioChange}/>
         <Mood mood="wow"  img={imgL} type="radio" onRadioChange={this.onRadioChange}/>
          <Mood mood="wtf"   img={imgL} type="radio" onRadioChange={this.onRadioChange}/>
          <Mood mood="good"  img={imgL}  type="radio" onRadioChange={this.onRadioChange}/>
          <Mood mood="exiced"   img={imgL}  type="radio" onRadioChange={this.onRadioChange}/>
        <Mood mood="happy"  img={imgL}  type="radio" onRadioChange={this.onRadioChange}/>
        </ul> 
      </form>
      <h1 style = {{marginTop:"200px"}}>You choose {this.state.mood}</h1>
      </div> */
          /* <div>
          <form > 
            <ul className="block">
            <Mood mood="sad" img={imgL} img2={imgH} type="radio" onRadioChange={this.onRadioChange}/>
        
            <Mood mood="wow"  img={imgL} img2={imgH} type="radio" onRadioChange={this.onRadioChange}/>
            <Mood mood="wtf"   img={imgL} img2={imgH} type="radio" onRadioChange={this.onRadioChange}/>
        
            <Mood mood="good"  img={imgL} img2={imgH} type="radio" onRadioChange={this.onRadioChange}/>
            <Mood mood="exiced"   img={imgL} img2={imgH} type="radio" onRadioChange={this.onRadioChange}/>
        
            <Mood mood="happy"  img={imgL} img2={imgH} type="radio" onRadioChange={this.onRadioChange}/>
      </ul>
          </form>
          <h1 style = {{marginTop:"200px"}}>You choose {this.state.mood}</h1>
          
          </div> 
      );
    }

  }
  const mapStateToProps = state => ({
    
  });
  
  const mapDispatchToProps = dispatch => ({
    handleMoodChange: event => dispatch(chooseMood(event)),
 
  });
  export default connect(mapStateToProps, mapDispatchToProps)(MoodGroup)*/
