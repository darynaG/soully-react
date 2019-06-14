import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'

import { far} from '@fortawesome/free-brands-svg-icons'
import Users from '../../data/users.json'
import {
        faSadTear,
        faFrownOpen,
        faMehRollingEyes,
        faLaughWink,
        faLaughBeam,
        faLaughSquint,
        faGlassWhiskey,
    faTableTennis,
    faCouch,
    faWalking,
    faRunning,
    faHiking,
    faHeart,
    faBirthdayCake,
    faGlassCheers,
    faHandHoldingHeart
  
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import videoClip from '../../assets/video/Nature.mp4'

library.add(
        faSadTear,
        faFrownOpen,
        faMehRollingEyes,
        faLaughWink,
        faLaughBeam,
        faLaughSquint,
        faGlassWhiskey,
    faTableTennis,
    faCouch,
    faWalking,
    faRunning,
    faHiking,
    faHeart,
    faBirthdayCake,
    faGlassCheers,
    faHandHoldingHeart
)
 
class MoodGroup extends React.Component{

constructor(props) {
                super(props);
                this.state = {  
                    mood: "sad"
                 
                };
            
                this.handleInputChange = this.handleInputChange.bind(this);
              }
jsonParser() {
var users=[];
Users.map((data,index)=>{ 
users.push(data);})
}      
        handleInputChange(event) {
                 
        const target = event.target;
        const value =  target.value;
        const name = target.name;
                
        this.setState({
         [name]: value
                  }); 
        console.log(this.state);
}
     
render ()
{
        
        return (
<div className="mood-picker">
    <h3 className="h3-label">What is your mood?</h3>  
    <form>
    <ul className="block">            
        <li className="flex-item">  
        <label>
        <input 
                type="radio" className="hide" name="mood" value="sad" checked ={this.state.mood === "sad"} onChange={this.handleInputChange}
                />
        
        <FontAwesomeIcon
                  icon={faSadTear} 
                  size="5x"
                />
        <h6 className="h5-label">sad</h6>
        </label>
        </li>
       
        <li className="flex-item">    
        <label>
        <input type="radio" className="hide" name="mood" value="wow" id ="wow" onChange={this.handleInputChange}
        />
        <FontAwesomeIcon
                  icon={faFrownOpen} 
                  size="5x"
                />
        <h6 class="h5-label">wow</h6>
        </label>
        </li>
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="mood" value="wtf" onChange={this.handleInputChange}
        />
        <FontAwesomeIcon
                  icon={faMehRollingEyes} 
                  size="5x"
                />
        <h6 class="h5-label">wtf</h6>
        </label>
        </li>
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="mood" value="excited" onChange={this.handleInputChange}
        />
        <FontAwesomeIcon
                  icon={faLaughWink} 
                  size="5x"
                />
        <h6 class="h5-label">exited</h6>
       </label>
        </li> 
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="mood" value="good" onChange={this.handleInputChange}
        />
        <FontAwesomeIcon
                  icon={faLaughBeam} 
                  size="5x"
                />
        <h6 className="h5-label">good</h6>
        </label>
        </li> 
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="mood" value="happy" onChange={this.handleInputChange}
        />
        <FontAwesomeIcon
                  icon={faLaughSquint} 
                  size="5x"
                />
        <h6 className="h5-label">happy</h6>
       </label>
        </li>     
        </ul> 


</form>     
<h1 style={{marginTop:"200px"}}>chosen mood {this.state.mood} !</h1>                       
</div>
);
      
}

}
 export default MoodGroup
