import React from 'react';
import Mood from '../mood-group/mood';
import imgL from '../../assets/img/angle-left.png'
import imgH from '../../assets/img/angle-right.png'
import storyEditor from '../../containers/story-editor';
import { connect } from 'react-redux'
import {chooseMood} from '../../actions';

class Group extends React.Component {
  
  render() {
    return (
      <div>
      <form>
       <ul className="block">
        <Mood mood="sad" img={imgL} imgClicked={imgH} type="checkbox"  onClick={this.props.onActivitySelect}/>
        <Mood mood="wow"  img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect}/>
         <Mood mood="wtf"   img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect} />
         <Mood mood="good"  img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect}/>
         <Mood mood="excited"  img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect}/>
       <Mood mood="happy"  img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect}/>
       </ul> 
     </form>
     <h1 style = {{marginTop:"200px"}}>You choose {this.props.mood}</h1>
     </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
   //activities : state.chooseActivity.activities
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    
    onActivitySelect: (event) => {
      event.preventDefault();
      dispatch({type: 'SELECT_ACTIVITY', activities: event.target.value})},
    onActivityUnselect: (event) => {
        event.preventDefault();
        dispatch({type: 'UNSELECT_ACTIVITY', activities: event.target.value})}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);