import { connect } from "react-redux";
import React from 'react'
import ManageMemo from "../../components/calendar/manageMemo"

import Messages from '../../data/posts.js'
import { ReactReduxContext } from "react-redux/lib/components/Context";
import store from "../../store";


// class WithManageMemo extends React.Component {
//   componentDidMount() 
//   {
//     console.log("with manage memo")
//     //Messages.getAllData();
//   }
 
// }
// const mapStateToProps = state => {
//   var stor = [];
//   //stor.push()
//   //const user  = state.dataReducer.postsPersonal.activities.length;
//   //console.log("ghfgjdfudfthyfjjuy", user)

  
//   //console.log(store.getState().dataReducer.postsPersonal)
//   // var a = store.getState().dataReducer.postsPersonal.posts.account_mood;
  
//   // a.map((data) => {
//   // if (state.day == data.date && data.username == store.getState().authentication.user.user.id)
//   // stor.push(
//   //      data.mood_id
//   //     )
//   // })
//   return {
//     memos: stor,
//     day: state.currentday.day,
//     n: state.dataReducer.postsPersonal.activities//store.getState().dataReducer.postsPersonal.activities,

//   };
// };
// const WithManageMemo = connect(mapStateToProps)(ManageMemo);

// export default WithManageMemo;
// //export default connect(mapStateToProps)(ManageMemo);