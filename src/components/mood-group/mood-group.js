import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'

import { far} from '@fortawesome/free-brands-svg-icons'

import {
        faSadTear,
        faFrownOpen,
        faMehRollingEyes,
        faLaughWink,
        faLaughBeam,
        faLaughSquint
  
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
        faSadTear,
        faFrownOpen,
        faMehRollingEyes,
        faLaughWink,
        faLaughBeam,
        faLaughSquint
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
<div class="mood-picker">
    <h3 class="h3-label">What is your mood?</h3>  
    <ul class="block">            
        <li class="flex-item">  
        
        <input type="radio" class="hide" name="fa-check-circle1" value="sad" />
        <FontAwesomeIcon
                  icon={faSadTear} 
                  size="5x"
                />
        <h6 class="h5-label">sad</h6>
        
        </li>
        <li class="flex-item">    
        
        <input type="radio" class="hide" name="fa-check-circle1" value="wow" />
        <FontAwesomeIcon
                  icon={faFrownOpen} 
                  size="5x"
                />
        <h6 class="h5-label">sad</h6>
        
        </li>
        <li class="flex-item"> 
        
        <input type="radio" class="hide" name="fa-check-circle1" value="wtf" />
        <FontAwesomeIcon
                  icon={faMehRollingEyes} 
                  size="5x"
                />
        <h6 class="h5-label">sad</h6>
        
        </li>
        <li class="flex-item"> 
        
        <input type="radio" class="hide" name="fa-check-circle1" value="wow"/>
        <FontAwesomeIcon
                  icon={faLaughWink} 
                  size="5x"
                />
        <h6 class="h5-label">sad</h6>
       
        </li> 
        <li class="flex-item"> 
        
        <input type="radio" class="hide" name="fa-check-circle1" value="wow"/>
        <FontAwesomeIcon
                  icon={faLaughBeam} 
                  size="5x"
                />
        <h6 class="h5-label">sad</h6>
       
        </li> 
        <li class="flex-item"> 
        
        <input type="radio" class="hide" name="fa-check-circle1" value="wow"/>
        <FontAwesomeIcon
                  icon={faLaughSquint} 
                  size="5x"
                />
        <h6 class="h5-label">sad</h6>
       
        </li>     
        </ul>  
                                      
</div>
);
      
}

}
 export default MoodGroup