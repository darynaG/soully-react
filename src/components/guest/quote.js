import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faQuoteLeft,
    faQuoteRight

} from '@fortawesome/free-solid-svg-icons'
library.add(
    faQuoteLeft,
    faQuoteRight
)

class Quote extends PureComponent{
    render(){
        let data=this.props.quotes;
        let current={}
        for(let i = 0;i < data.length;i++){  
            if (data[i].mood===this.props.mood) {
            current=data[i];
            break;
            }
        }
        return(
            <div className="centered-text">  
               <article>
                   {current.text}
                  <br></br>
                   <p>-{current.author}-</p>
               </article>
            </div> 
        )
    }
    }
    const mapStateToProps= (state) => {
        
        
        return {
           mood : state.changeMood.mood,
           quotes: state.dataReducer.quotes
        };
    }
    export default connect(mapStateToProps)(Quote);
