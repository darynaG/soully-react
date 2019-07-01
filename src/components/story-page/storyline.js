import React ,{ Component}from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Post from '../story-page/message'
import {connect} from "react-redux";
import {  faGratipay} from '@fortawesome/free-brands-svg-icons'
import Messages from '../../data/posts.js';
import Spinner from 'react-spinner-material';

import {
        faQuoteLeft,
        faQuoteRight
  
} from '@fortawesome/free-solid-svg-icons'
import store from '../../store';

library.add(
    faQuoteLeft,
    faQuoteRight,
    faGratipay
)

export class  Posts extends React.Component{
    constructor(props){
        super(props);
        this.state={posts:[]}
    }
    componentDidMount(){
        var temp=[];
     
        var a=Messages.getAll().then((data)=>{
            for(var i=0;i<data.length;i++){
            temp.push(data[i]);
    }
        })
        .then(()=>{
            this.setState({posts:temp});
        }).then(console.log("Here"))

    }
    componentDidUpdate(){
       // this.setState({posts:this.props.posts});
    }
  render(){ 
    
    if(store.getState().dataReducer.loading===true){
        
        return(
            <div className="loadingContainer three">
                <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
            </div>
        )
    }else
      return (
                    <div className="all_s">
                    <div className="centeredcolumn">
                    { 
                        this.state.posts.map((post,index)=>{
                            if(this.props.postsLikeCounters[post.id]===undefined) this.props.postsLikeCounters[post.id]=0;
                            return(
                              
                                <Post localData={post}  
                                key={post.id}  
                                post={post}
                                
                                likes={this.props.postsLikeCounters[post.id]+post.likes}
                                liked={this.props.postsLikes[post.id]}
                                onLike={this.props.onLike}
                                onUnlike={this.props.onUnlike} />
                            )

                        })
                    }  
                </div>
                </div>
            

                    );}

                }
   
                const mapStateToProps = state => ({
                    posts: state.state.posts
                });        
                
export default connect(mapStateToProps)(Posts);