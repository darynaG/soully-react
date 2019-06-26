import React ,{ Component}from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Post from '../story-page/message'
import {connect} from "react-redux";
import { far, faGratipay} from '@fortawesome/free-brands-svg-icons'
import Messages from '../../data/posts.js';


import {
        faQuoteLeft,
        faQuoteRight
  
} from '@fortawesome/free-solid-svg-icons'

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
  render(){ 
      return (
                    <div className="story-board">
                    <div className="leftcolumn">
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