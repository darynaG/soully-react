
import React from 'react';
import Mood from './mood';
import imgL from '../../assets/img/angle-left.png'
import imgH from '../../assets/img/angle-right.png'
class MoodG extends React.Component {

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
  
  export default MoodG