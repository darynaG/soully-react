import React from 'react';
import Check from '../mood-group/checkbox';
import imgL from '../../assets/img/angle-left.png'
import imgH from '../../assets/img/angle-right.png'
import { connect } from 'react-redux'

class Group extends React.Component {
  
  render() {
    return (
      <div>
      <form>
       <ul className="block">
        <Check mood="sad" img={imgL} imgClicked={imgH} type="checkbox"  onClick={this.props.onActivitySelect}/>
        <Check mood="wow"  img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect}/>
         <Check mood="wtf"   img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect} />
       </ul> 
     </form>
     <h1 style = {{marginTop:"200px"}}>You choose {this.props.mood}</h1>
     </div>
    );
  }
}

const mapStateToProps = (state) => {
 return {
  // activities : state.chooseActivity.activities
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    
    onActivitySelect: (event) => {
      console.log(event.target.value);
      event.preventDefault();
      dispatch({type: 'SELECT_ACTIVITY', activities: event.target.value})},
    onActivityUnselect: (event) => {
        event.preventDefault();
        dispatch({type: 'UNSELECT_ACTIVITY', activities: event.target.value})}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);