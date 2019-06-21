import React from 'react';
import Check from '../mood-group/checkbox';
import imgL from '../../assets/img/angle-left.png'
import imgH from '../../assets/img/angle-right.png'
import { connect } from 'react-redux'

class Group extends React.Component {
   arr;
   render() {
    return (
      <div>
      <form>
       <ul className="block">
        <Check mood="sad"  type="checkbox"  onClick={this.props.onActivitySelect}  />
        <Check mood="wow"  img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect}/>
        <Check mood="wtf"   img={imgL} imgClicked={imgH} type="checkbox" onClick={this.props.onActivitySelect} />
       </ul> 
     </form>
     <h1 style = {{marginTop:"200px"}}>You choose {this.props.activities}</h1>
     </div>
    );
  }
}
 
const mapStateToProps = (state) => {
    console.log(state.activities);
 return {

  activities : state.activities
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // explicitly forwarding arguments
    
    onActivitySelect: (event) => {
    
      event.preventDefault();
      dispatch({type: 'SELECT_ACTIVITY', activities: ["sad", "happy"]})},
    
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);