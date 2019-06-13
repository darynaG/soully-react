import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'

import { far} from '@fortawesome/free-brands-svg-icons'

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
import videoClip from '../../assets/video/Nature.mp4'

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
        }

getInitialState() {
return {selectedOption: 'sad'};
}

handleOptionChange(changeEvent) {
this.setState({
selectedOption: changeEvent.target.value
});
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
        <input type="radio" className="hide" name="sad" value="sad" id="radio-sad"/>
        <FontAwesomeIcon
                  icon={faSadTear} 
                  size="5x"
                />
        <h6 className="h5-label">sad</h6>
        </label>
        </li>
       
        <li className="flex-item">    
        <label>
        <input type="radio" className="hide" name="wow" value="wow" />
        <FontAwesomeIcon
                  icon={faFrownOpen} 
                  size="5x"
                />
        <h6 class="h5-label">wow</h6>
        </label>
        </li>
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="wtf" value="wtf" />
        <FontAwesomeIcon
                  icon={faMehRollingEyes} 
                  size="5x"
                />
        <h6 class="h5-label">wtf</h6>
        </label>
        </li>
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="excited" value="excited"/>
        <FontAwesomeIcon
                  icon={faLaughWink} 
                  size="5x"
                />
        <h6 class="h5-label">exited</h6>
       </label>
        </li> 
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="good" value="good"/>
        <FontAwesomeIcon
                  icon={faLaughBeam} 
                  size="5x"
                />
        <h6 className="h5-label">good</h6>
        </label>
        </li> 
        <li className="flex-item"> 
        <label>
        <input type="radio" className="hide" name="happy" value="happy"/>
        <FontAwesomeIcon
                  icon={faLaughSquint} 
                  size="5x"
                />
        <h6 className="h5-label">happy</h6>
       </label>
        </li>     
        </ul>  
</form>
        <video  className="video" playsInline autoPlay muted loop id="myVideo">
                                <source src={videoClip} type="video/mp4"/>
        </video>                                
</div>
);
      
}

}
 export default MoodGroup
