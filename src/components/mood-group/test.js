
import React from 'react';
import Mood from './mood';

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
            <Mood mood="sad"   onRadioChange={this.onRadioChange}/>
        
            <Mood mood="wow"  onRadioChange={this.onRadioChange}/>
            <Mood mood="wtf"   onRadioChange={this.onRadioChange}/>
        
            <Mood mood="good"  onRadioChange={this.onRadioChange}/>
            <Mood mood="exiced"   onRadioChange={this.onRadioChange}/>
        
            <Mood mood="happy"  onRadioChange={this.onRadioChange}/>
      </ul>
          </form>
          <h1 style = {{marginTop:"200px"}}>You choose {this.state.mood}</h1>
          
          </div>
      );
    }

  }
  
  export default MoodG