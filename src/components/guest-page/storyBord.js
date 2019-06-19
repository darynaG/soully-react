import React ,{ Component}from 'react';
import Messages from '../../data/posts.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StoryBoard extends Component {
    constructor(props){
        super(props);
       
      
      // this.state={visibility:props.visible,mood:props.mood,stories:mood_stories, i:rand};
        this.state={stories:[]};
        //console.log(this.state)
      
    }
    
    componentDidMount(){
        var mood_stories=[];
        var st=[];
        var a=Messages.getAll().then((data)=>{
           
            for(var i=0;i<data.length;i++){
                if(this.props.mood){
                    if(this.props.mood==data[i].mood)
                    st.push(data[i]);
                }else{
                    st.push(data[i]);
                }}
                var maxNumber=st.length-2;
                var rand=Math.floor(Math.random()*maxNumber);
                for(var j=0;j<3;j++){
                    mood_stories.push(st[rand+j]);
                }
                //console.log("mmoood",mood_stories);
      
    
        })//.then(()=>{console.log("this is mood_stories",mood_stories.length)})
        .then(()=>{
            
            this.setState({stories:mood_stories});
        })
    }
    render(){
    return(
        <React.Fragment>
            <h1 >Stories</h1>
        <div className="storyboard">
       
    <div className="story_column left">
         {
             this.state.stories.slice(0,2).map((data)=>{
                
                    return(
                    <div className="story">
                    
                    <div className="story_head">
                       
                       <div> {data.username}
                       </div>
                    </div>
                   

                    <article className="story_text"> <FontAwesomeIcon icon={faQuoteLeft} size="1x"/>
                    {data.text}
      
            </div>

             )
         
         })
        }

    </div>

    <div className="story_column right">
    
    {
             this.state.stories.slice(2,3).map((data)=>{
                 return(
                    <div className="story">
                    
                    <div className="story_head">
                       
                       <div> {data.username}
                       </div>
                    </div>
                   

                    <article className="story_text"> <FontAwesomeIcon icon={faQuoteLeft} size="1x"/>
                    {data.text}

              
              </article> 
                    
            </div>
             )
         })
        }
    </div>
</div>
</React.Fragment>
    );
}
}
export default StoryBoard;