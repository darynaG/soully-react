import React ,{ Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Quote extends Comment{
constructor(props){
    super(props);
    this.state={mood:props.mood}
}
}
export default Quote;