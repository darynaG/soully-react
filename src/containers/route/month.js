import React from 'react'
import Messages from '../../data/posts'
import WithMonth from "../month/withMonth";
import MonthC from "../../components/calendar/month";
import '../../css/responsibleRecomendation.css'
import store from '../../store'

class Month extends React.Component {
    constructor(props)
  {
    super(props)
    //Messages.getByDayAndUsername(store.getState().authentication.user.user.id, this.props.day);
  }

    render() {
        return (
            <div>
                <MonthC />
            </div>
        )
    }
}
export default Month;