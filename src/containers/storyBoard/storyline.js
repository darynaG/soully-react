import React ,{ Component}from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Post from '../../components/stories/message'
import {connect} from "react-redux";
import {  faGratipay} from '@fortawesome/free-brands-svg-icons'
import Spinner from 'react-spinner-material';
import Messages from '../../data/posts'
import { Redirect } from 'react-router-dom'
import { userActions } from '../../actions';
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
    Messages.getAll()
  }
  render(){ 
    let a=this.props.posts.posts;
    let data=[];
  
    for(let i=a.length-1;i>=0;i--){
     
        data.push(a[i]);

    }
    if(store.getState().dataReducer.loading===true){
        
        return(
            <div className="loadingContainer three">
                <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
            </div>
        )
    }else if(store.getState().dataReducer.error===401){
     
        store.dispatch(userActions.logout())
        return(
         <Redirect to='/login'></Redirect>
        )
    }else
      return (
                    <div className="all_s">
                    <div className="centeredcolumn">
                    { 
                        data.map((post,index)=>{
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
                const mapStateToProps = (state) => {
                  return{  
                    loading:state.dataReducer.loading,
                    posts:state.dataReducer.posts,
                   
                   
                }
                };        
                
export default connect(mapStateToProps)(Posts);